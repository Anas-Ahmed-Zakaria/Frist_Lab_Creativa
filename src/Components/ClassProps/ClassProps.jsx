import React, { Component } from 'react'
import './ClassProps.css'
export default class ClassProps extends Component {
    constructor({fristname , sname , fristCourse , secondCourse , children}) {
        super({fristname, sname, fristCourse , secondCourse , children})
        this.state = {
        props: {fristname ,  sname , fristCourse , secondCourse , children}
        }
    }
 // destructuring props
render() {
    return (
    <div className='parent'>
        <div className='classProps'>
            <p>{this.props.fristname} {this.props.sname} studied course {this.props.fristCourse} and course {this.props.secondCourse}</p>
            {this.props.children}
        </div>
    </div>
    )
}
}
