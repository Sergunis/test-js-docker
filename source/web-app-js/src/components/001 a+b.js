import React, { Component } from 'react';

class Sum extends Component {


  constructor(props) {
    super(props);

    this.nameA = 'a';
    this.nameB = 'b';
    this.nameSum = 'sum';

    this.state = {};
    this.state[this.nameA] = 0;
    this.state[this.nameB] = 0;
    this.state[this.nameSum] = 0;

    this.typing = this.typing.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  typing(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  calculate() {
    const sum = parseInt(this.state[this.nameA]) + parseInt(this.state[this.nameB]);
    let newState = {};
    newState[this.nameSum] = sum;

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h2>A+B</h2>
        <form className="form-inline">
          <input type="text" name={this.nameA} value={this.state.a} onFocus={(event) => event.target.select()} onChange={this.typing} className="form-control" maxLength={9}/>
          +
          <input type="text" name={this.nameB} value={this.state.b} onFocus={(event) => event.target.select()} onChange={this.typing} className="form-control" maxLength={9}/>
          &nbsp; = &nbsp;
          {this.state.sum}
        </form>
        <div>
          <button onClick={this.calculate} className="btn btn-info calculate-btn">Calculate</button>
        </div>


      </div>

    );
  }
}

export default Sum;