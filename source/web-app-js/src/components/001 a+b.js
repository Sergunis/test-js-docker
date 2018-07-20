import React, { Component } from 'react';

class Sum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      sum: 0
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickCalculateButton = this.handleClickCalculateButton.bind(this);
  }

  handleChangeInput(event) {
    let newState = {};
    newState[event.target.name] = parseInt(event.target.value);

    this.setState(newState);
  }
  
  calculate(a, b) {
    return a + b;
  }

  handleClickCalculateButton() {
    const sum = this.calculate(this.state.a, this.state.b);
    this.setState({ sum });
  }

  render() {
    return (
      <div>
        <h2>A+B</h2>
        <blockquote>Требуется сложить два целых числа А и В.</blockquote>
        <form className="form-inline">
          <input type="text" name={'a'} value={this.state.a} onFocus={(event) => event.target.select()} onChange={this.handleChangeInput} className="form-control" maxLength={9}/>
          +
          <input type="text" name={'b'} value={this.state.b} onFocus={(event) => event.target.select()} onChange={this.handleChangeInput} className="form-control" maxLength={9}/>
          &nbsp; = &nbsp;
          {this.state.sum}
        </form>
        <div>
          <button onClick={this.handleClickCalculateButton} className="btn btn-info calculate-btn">Calculate</button>
        </div>
      </div>
    );
  }
}

export default Sum;