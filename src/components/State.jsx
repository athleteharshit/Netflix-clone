import React from 'react';

class State extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: "Hello my name is Harshit"
        }
    }
    
    subs() {
        this.setState({
            msg: "change my name"
        })
    }
        
    render(){
        return(
            <>
            <h1>{this.state.msg}</h1>
            <button onClick={() => this.subs()}>click me</button>
            </>
        );
    }
}

export default State;