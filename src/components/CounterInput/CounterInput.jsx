import React, {Component} from 'react'
import './CounterInput.scss';

import Minus from '../../icons/Minus.jsx'
import Plus from '../../icons/Plus.jsx'

class CounterInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value) {
      this.sendWeight()
    }
  }

  decreaseValue = () => {
    if (this.state.value > 0) {
      const newValue = this.state.value - 1
      this.setState({value: newValue})
    }
  }

  increaseValue = () => {
    const newValue = this.state.value + 1
    this.setState({value: newValue})
  }

  sendWeight() {
    this.props.updateTotal(this.props.weight, this.state.value*this.props.weight)
  }

  render() {
    return (
      <label className="counter-input">
        <div className="counter-input__label">
          {this.props.weight} lbs
        </div>
        <div className="counter-input__input-set">
          <button onClick={this.decreaseValue}>
            <Minus />
          </button>
          <input readOnly value={this.state.value} />
          <button onClick={this.increaseValue}>
            <Plus />
          </button>
        </div>
      </label>
    )
  }
}

export default CounterInput