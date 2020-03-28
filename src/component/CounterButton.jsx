import React, {Component} from 'react';
import './CounterButton.css';

export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
        count : 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
}
  render() {
    return (
      <div className="Counter">
        <CounterButton by ={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by ={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.count}</span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
  increment(by){
     this.setState ({
        
        count : this.state.count + by
     })
    
}

decrement(by){
  this.setState ({
     
     count : this.state.count - by
  })
 
}

reset(){
  this.setState ({
     
    count : 0
 })
}
}

class CounterButton extends Component{

    render(){
      return (
        <div className="CounterButton">
            <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            {/* <span className="count">{this.state.count}</span> */}
        </div>
      );
     
    }

  } 
