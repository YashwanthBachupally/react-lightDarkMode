// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

/// /let clsname
// let btnTxt

class LightDarkMode extends Component {
  state = {lightMode: true}

  Clicked = () => {
    const {lightMode} = this.state

    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  ButtonTxt = () => {
    const {lightMode} = this.state
    return lightMode
      ? {btnTxt: 'Dark Mode', clsname: 'l-container'}
      : {btnTxt: 'Light Mode', clsname: 'b-container'}
  }

  render() {
    return (
      <div className="cont">
        <div className={this.ButtonTxt().clsname}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.Clicked}>
            {this.ButtonTxt().btnTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
