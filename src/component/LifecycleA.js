import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"ramganga"
      }
      console.log("LifecycleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedSateFromPrpops")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
      return null
    }
    componentDidUpdate(){
      console.log("LifeCycleA componentDidUpdate")
    }
    changeState=()=>{
      this.setState({
        name:"ramganga"
      })
    }
  render() {
    console.log("LifeCycleA render")
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change Sate</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA