// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
    }

    initiateBomb = () => {
        if (this.state.secondsLeft > 0) {
            return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        } else {
            return (<div>Boom!</div>)
        }
    }

    render() {
        return (
           <div>{ this.initiateBomb() }</div> 
        )
    }
}