import React, { Component } from 'react'
import Forest from './containers/map.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      test: 0,
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
  }


  render() {
    return (
      <div className="App">
        <Forest />
      </div>
    )
  }
}

export default App;
