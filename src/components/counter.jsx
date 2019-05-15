import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1,
        name: "IT",
        tags: ["tag1","tag2","tag3"]
        // imageUrl: "https://picsum.photos/id/909/200/200"
    };

    // constructor() {
    //    super();
    //    this.handleIncrement=this.handleIncrement.bind(this);
    //    console.log("Constructor",this);

    // }

    style = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        return (
        <div>
            {/* <img src={this.state.imageUrl} alt="text"></img> */}
            <span style={this.style} className={this.getBadgeClasses()}>
            {this.formatCount()}</span>
            <button onClick={this.handleIncrement} style={this.style} className="btn">Increment</button>
            {/* <ul>{this.state.tags.map(x => <li>{x}</li>)}  </ul>; */}
            {/* <span style={this.style}>{this.state.tags.map(x => <h1>{x}</h1>)} </span>; */}
            {this.redenderTags()};
        </div>);
    }
    formatCount() {
        const {count} = this.state;
        const {name} = this.state;
        console.log("in"+count);
        var cnt = count === 0 ? "Zero" + name  : count;
        return <h1>{cnt}</h1>;
        
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "primary" : "warning";
        return classes;
    }
    redenderTags() {
        if (this.state.tags.length == 0) return <h3>No tags</h3>;

        return <span style={this.style}>{this.state.tags.map(x => <h1>{x}</h1>)} </span>;
    }
    handleIncrement=() => {

        this.setState({count: this.state.count+1});
        console.log("Increment Clicked!",this.state.count);
    }
}
 
export default Counter;