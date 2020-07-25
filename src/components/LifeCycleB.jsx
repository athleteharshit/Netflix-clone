import React, {Component} from 'react';

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state= {
            count: 0
        }
        console.log("LifeCycleB : this.state");
    }
    
    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifeCycleB : getDerivedStateFromProps");
        return null;
    }
     
    componentDidUpdate(props, state) {
        console.log("componetDidUdate");
    }
    render () {
        console.log("LifeCycleB : render");
        return (
            <>
            <h1>hell, I am LifeCycleB {this.state.count}</h1>
            <button onClick={this.updateCount}>click her</button>
            </>
        )
    }
    
    componentDidMount() {
        console.log("LifeCycleB : componentDidMount");

    }
}

export default LifeCycleB;