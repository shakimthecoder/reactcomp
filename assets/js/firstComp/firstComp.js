import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    }
    this.clickedBoy = this.clickedBoy.bind(this)
  }


 clickedBoy(){
 this.setState({
   health: this.state.health - 25
 }, function (){
   console.log('HEY I CLICKED THE BOY HIS HEALTH IS NOW' + this.state.health)
 })
 }
  render () {
    return(<div id = {'headersection'}>
    <div className={`blue-bg ${(this.state.health) < 55 ?
    this.state.lowLevelClass : ''}`}>
    <div className={'user-info'}>
    <h3>name: {this.state.name}</h3>
    <h3>health: {this.state.health}</h3>
    <h3>level: {this.state.level}</h3>
    </div>
    <img src="/img/bape2.png" alt={'guy with bape on'} onClick ={this.clickedBoy} />
          </div>
    </div>)

  }
}




const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
