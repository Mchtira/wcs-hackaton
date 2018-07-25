import React, { Component } from 'react'
import './style/Fight.css'

class Fight extends Component {
  state = {
    i: 0,
    myHp: 180,
    myMaxHp: 180,
    myMana: 20,
    myMaxMana: 20,
    myName: 'Clad',
    hisHp: 70,
    hisMaxHp: 70,
    hisName: 'Demogorgon',
    class: 'fight-button',
    active: 'fight-button active',
    info: 'Choisissez votre action'
  }

  onKeyPressed = (e) => {
    if (e.key === 'ArrowUp' && this.state.i > 0) {
      this.setState({i : this.state.i - 1})
    }
    if (e.key === 'ArrowDown' && this.state.i < 3) {
      this.setState({i : this.state.i + 1})
    }
    if (e.key === 'Enter') {
      if (this.state.i === 0) {
        const swordD = this.state.hisHp - Math.floor(this.state.hisHp - (10 * Math.random() + 20))
        this.state.hisHp - swordD <= 0 ? this.setState({hisHp: 0}) : this.setState({hisHp: swordD})
      } else if (this.state.i === 1) {
          const myMana = this.state.myMana - 4
          const magicD = this.state.hisHp - Math.floor(this.state.hisHp - (20 * Math.random() + 30))
          if (this.state.myMana >= 4) {
            this.state.hisHp - magicD <= 0 ? this.setState({hisHp: 0}) : this.setState({hisHp: magicD})
            this.setState({myMana})
          } else {
            this.setState({info : 'Plus assez de Mana !'})
          }
      } else if (this.state.i === 2) {
      
      } else if (this.state.i === 3) {
      
      }
    }
    console.log(e.key)
  }



  render() {
    return (
      <div onKeyDown={this.onKeyPressed} style={{width: '500px', height: '500px'}}>
        <div className='fight-content-top'>
        </div>
        <div className='fight-content-bottom'>
          <h1 className='fight-h1'>{this.state.info}</h1>
          <div className='fight-content-bottom-blocks'>
            <div className='fight-content-bottom-block1'>
              <div>
                <button autoFocus className={this.state.i === 0 ? this.state.active : this.state.class}>attaque à l'épée</button><br/>
                <button className={this.state.i === 1 ? this.state.active : this.state.class}>attaque magique</button><br/>
                <button className={this.state.i === 2 ? this.state.active : this.state.class}>parer</button><br/>
                <button className={this.state.i === 3 ? this.state.active : this.state.class}>fuir</button><br/>
              </div>
            </div>
            <div className='fight-content-bottom-block2'>
              <h2 className='fight-h2'>{`${this.state.myName} - PV : ${this.state.myHp}/${this.state.myMaxHp} - PM : ${this.state.myMana}/${this.state.myMaxMana}`}</h2>
              <h2 className='fight-h2'>{`${this.state.hisName} - PV : ${this.state.hisHp}/${this.state.hisMaxHp}`}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fight
