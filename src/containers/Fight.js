import React, { Component } from 'react'
import './style/Fight.css'

class Fight extends Component {
  state ={
    myHp: 180
    myMaxHp: 180,
    myName: 'Clad',
    hisHp: 70,
    hisMaxHp: 70,
    hisName: 'Demogorgon',
  }

  render() {
    console.log('modal')
    return (
      <div style={{width: '500px', height: '500px'}}>
        <div className='fight-content-top'>
        </div>
        <div className='fight-content-bottom'>
          <h1 className='fight-h1'>Combat</h1>
          <div className='fight-content-bottom-blocks'>
            <div className='fight-content-bottom-block1'>
              <div>
                <button className='fight-button'>attaque à l'épée</button>
                <br />
                <button className='fight-button'>attaque magique</button>
                <br />
                <button className='fight-button'>parer</button>
                <br/>
                <button className='fight-button'>fuir</button>
              </div>
            </div>
            <div className='fight-content-bottom-block2'>
              <h2 className='fight-h2'>{`${}`}</h2>
              <h2 className='fight-h2'> Choisissez votre action</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fight
