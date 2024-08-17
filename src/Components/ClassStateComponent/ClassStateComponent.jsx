import React, { Component } from 'react'
import './ClassStateComponent.css'
export default class ClassStateComponent extends Component {
    constructor() {
    super();
    this.state = {
        isloggedin: 'False',
        subscription: "Guest",
    };
    }

    changeState() {
        this.setState(
            {isloggedin: 'True' , subscription: "subscription"})
        };
render() {
    return (
    <div className='parent'>
        <div className='classState'>
            <h2>You now have a {this.state.subscription}</h2>
            <h3>{this.state.isloggedin}</h3>
            <button onClick={()=>this.changeState()}>Click</button>
        </div>
    </div>
    )
}
}
