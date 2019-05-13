import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        name: "IT"
    };
    render() { 
        return <div><span>{this.formatCount()}</span><button>Increment</button></div>;
    }
    formatCount() {
        const {count} = this.state;
        const {name} = this.state;
        return count === 0 ? "Zero" + name : count;
    }
}
 
export default Counter;