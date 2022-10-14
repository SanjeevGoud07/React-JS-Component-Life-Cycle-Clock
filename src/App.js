import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggleClock = () => {
    // const {showClock} = this.state
    this.setState(prevState => {
      const {showClock} = prevState
      return {showClock: !showClock}
    })
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
          //   onClick={() => {
          //     // const {showClock} = this.state
          //     this.setState({showClock: !showClock})
          //   }}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
        {/* <Clock /> */}
      </div>
    )
  }
}

export default App
