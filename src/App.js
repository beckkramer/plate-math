import React, { Component } from 'react';
import './App.scss';
import './logo.svg';

import CounterInput from './components/CounterInput/CounterInput.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bar: 0,
      plates: {
        w2_5: 0,
        w5: 0,
        w10: 0,
        w15: 0,
        w25: 0,
      },
      total: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.plates !== this.state.plates) {
      const totalPlates = this.tallyPlateValues(this.state.plates)
      this.setState({total: +this.state.bar +totalPlates})
    }
  }

  tallyPlateValues = (plates) => {
    let totalPlates = 0
    let plate
    for(plate in plates) {
      totalPlates += +plates[plate]
    }
    return totalPlates*2
  }

  updatePlateTotal = (weight, value) => {
    const formattedWeight = String(weight).replace('.', '_')
    const plate = `w${formattedWeight}`
    this.setState({plates: {
      ...this.state.plates,
      [plate]: value,
    }})
  }

  updateBarTotal = (e) => {
    this.setState({bar: e.target.value})
    const totalPlates = this.tallyPlateValues(this.state.plates)
    this.setState({total: +e.target.value +totalPlates})
  }

  render() {
    return (
      <div className="App">

        <header className="App__header">

        </header>
        <main className="App__main content">

          Pick bar weight: 
          
          <label>
            <input name="bar" onChange={this.updateBarTotal} type="radio" value="35" />
            35 lbs
          </label>
          <label>
            <input name="bar" onChange={this.updateBarTotal} type="radio" value="45" />
            45 lbs
          </label>

          <p>Add the number of plates put on just one side of the bar:</p>

          <CounterInput updateTotal={this.updatePlateTotal} weight={2.5} />
          <CounterInput updateTotal={this.updatePlateTotal} weight={5} />
          <CounterInput updateTotal={this.updatePlateTotal} weight={10} />
          <CounterInput updateTotal={this.updatePlateTotal} weight={15} />
          <CounterInput updateTotal={this.updatePlateTotal} weight={25} />
        </main>
        <footer className="App__footer">
          Total Weight: {this.state.total}
        </footer>
      </div>
    );
  }
}

export default App;
