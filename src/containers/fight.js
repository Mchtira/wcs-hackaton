import React, { Component } from 'react'
import './style/Fight.css'
import Char from '../ressources/rpg-pack/chars/gabe/player.png'
import Ennemy from '../ressources/ennemy1.gif'
import Life from '../ressources/life.png'
import Mana from '../ressources/mana.png'


class Fight extends Component {
  state = {
    myTurn: true,
    action: 0,
    hp: 280,
    maxHp: 280,
    mana: 15,
    maxMana: 15,
    attack: 20,
    defense: 10,
    magic: 40,
    name: 'Sacha',
    ennemyHp: 180,
    ennemyMaxHp: 180,
    ennemyName: 'Sephiroth',
    class: 'fight-button',
    active: 'fight-button active',
    info: 'Choisissez votre action',
    defenseMode: false,
    myClass: 'fight-char',
    hisClass: 'fight-ennemy',
    victoire: 'Victoire !',
    defaite: 'Défaite !',
  }

  hisTurn = () => {
    if (this.state.ennemyHp > 0) {
      setTimeout(() => this.setState({info: `${this.state.ennemyName} attaque !`}), 2000)
      let damage = Math.floor(40 * Math.random() + 30)
      if (this.state.defenseMode) damage = damage / 2 
      damage = damage - this.state.defense
      const monsterD = this.state.hp - damage
      setTimeout(() => {
        this.setState({myTurn: true, info: `${this.state.name} subit ${damage} points de dégats`})
        monsterD <= 0 ? this.setState({hp: 0}, () => setTimeout(this.props.fn, 3000)) : this.setState({hp: monsterD})
        this.setState({hisClass: 'fight-ennemy-attack'})
        setTimeout(() => this.setState({hisClass: 'fight-ennemy'}), 200)
      }, 1000)
      this.setState({defenseMode: false})
    }
  }


  attack = (e) => {
    if (this.state.myTurn && this.state.hp > 0) {
      let damage

      //attack with sword
      if (this.state.action === 0) {
        damage = Math.floor(this.state.attack * Math.random() + 20)
        const swordD = this.state.ennemyHp - damage
        swordD <= 0 ? this.setState({ennemyHp: 0}, () => setTimeout(this.props.fn, 3000)) : this.setState({ennemyHp: swordD})
        this.setState({info : `${this.state.ennemyName} subit ${damage} points de dégats`})
      } 

      //attack with magic
      else if (this.state.action === 1) {
        damage = Math.floor(this.state.magic * Math.random() + 30)
        const mana = this.state.mana - 4
        const magicD = this.state.ennemyHp - damage
        if (this.state.mana >= 4) {
          magicD <= 0 ? this.setState({ennemyHp: 0}, () => setTimeout(this.props.fn, 3000)) : this.setState({ennemyHp: magicD})
          this.setState({mana, info : `${this.state.ennemyName} subit ${damage} points de dégats`})
        } else {
          this.setState({info : 'Plus assez de Mana !'})
        }
      } 

      // defense
      else if (this.state.action === 2) {
        this.setState({defenseMode: true})
        this.setState({info : 'Dommages réduits de moitié'})
      } 

      //run
      else if (this.state.action === 3) {
        Math.random() < 0.80 ? this.setState({info: "you can't run !"}) : setTimeout(this.props.fn, 3000)
      }

      if(e.key === 'Enter') {
        this.setState({myClass: 'fight-char-attack'})
        setTimeout(() => this.setState({myClass: 'fight-char'}), 200)
      }

      this.setState({myTurn: false}, () => {
        if (this.state.hp > 0) this.hisTurn()
        else this.setState({info: 'Combat terminé'})
      })
    }
  }


  onKeyPressed = (e) => {
    if (e.key === 'ArrowUp' && this.state.action > 0) {
      this.setState({action : this.state.action - 1})
    }
    if (e.key === 'ArrowDown' && this.state.action < 3) {
      this.setState({action : this.state.action + 1})
    }
    if (e.key === 'Enter') {
      this.attack(e)
    }
  }



render() {
  return (
    <div onKeyDown={this.onKeyPressed} style={{width: '500px', height: '500px'}}>
    <div className='fight-content-top'>
    <div className='result'>
      <h2 className='fight-result' style={{visibility: this.state.hp === 0 || this.state.ennemyHp === 0 ? 'visible' : 'hidden'}}>{this.state.hp === 0 ? this.state.defaite : this.state.victoire}</h2>
    </div>
    <div className='persos'>
      <div className={this.state.myClass}>
        <img className='fight-char-img' alt="" src={Char}/>
      </div>
      <div className={this.state.hisClass}>
        <img className='fight-ennemy-img' alt="" src={Ennemy}/>
      </div>
    </div>
    </div>
    <div className='fight-content-bottom'>
    <h1 className='fight-h1'>{this.state.info}</h1>
    <div className='fight-content-bottom-blocks'>
    <div className='fight-content-bottom-block1'>
    <div>
    <button autoFocus className={this.state.action === 0 ? this.state.active : this.state.class}>attaque à l'épée</button><br/>
    <button className={this.state.action === 1 ? this.state.active : this.state.class}>attaque magique</button><br/>
    <button className={this.state.action === 2 ? this.state.active : this.state.class}>parer</button><br/>
    <button className={this.state.action === 3 ? this.state.active : this.state.class}>fuir</button><br/>
    </div>
    </div>
    <div className='fight-content-bottom-block2'>
      <div className='fight-content-player'>
        <div>
          <h2 className='fight-h2'>{`${this.state.name} : `}</h2>
        </div>
        <img className='fight-lifemana-img' alt="" src={Life}/>
        <div>
          <h2 className='fight-h2'>{`${this.state.hp}/${this.state.maxHp} - `}</h2>
        </div>
        <img className='fight-lifemana-img' alt="" src={Mana}/>
        <div>
          <h2 className='fight-h2'>{`${this.state.mana}/${this.state.maxMana}`}</h2>
        </div>
      </div>
      <br />
      <div className='fight-content-player'>
        <div>
          <h2 className='fight-h2'>{`${this.state.ennemyName} : `}</h2>
        </div>
        <img className='fight-lifemana-img' alt="" src={Life}/>
        <div>
          <h2 className='fight-h2'>{`${this.state.ennemyHp}/${this.state.ennemyMaxHp}`}</h2>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
}
}

export default Fight