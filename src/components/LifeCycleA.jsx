import React, {Component} from 'react';
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state= {
            name: "harshit"
        }
        console.log("LifeCycleA : this.state");
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycleA : getDerivedStateFromProps");
        return null;
    }
    
    render () {
        console.log("LifeCycleA : render");
        return (
            <>
            <h1>hell, I am LifeCycleA</h1>
            <LifeCycleB/>
            </>
        )
    }
    
    componentDidMount() {
        console.log("LifeCycleA : componentDidMount");

    }
}

export default LifeCycleA;