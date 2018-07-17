import React, { Component } from 'react';

class SummaN extends Component {

  constructor(props) {
    super(props);

    this.state = {
      n: 0,
      summaN: 0
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickCalculateButton = this.handleClickCalculateButton.bind(this);
  }

  handleChangeInput(event) {
    let newState = {};
    newState[event.target.name] = parseInt(event.target.value);

    this.setState(newState);
  }

  calculate(n) {
    return Array(n)
      .fill(undefined)
      .map((en, index) => index + 1)
      .reduce((acc, cur) => {
        return acc + cur;
      });
  }

  handleClickCalculateButton() {
    let summaN = this.calculate(this.state.n);
    this.setState({ summaN });
  }

  render() {
    return (
      <div>
        <h2>Summa</h2>
        <h3>Input data</h3>
        <input className="form-control" name={'n'} onChange={this.handleChangeInput} value={this.state.n}
               maxLength={5}/>

        <button className="btn btn-primary calculate-btn" onClick={this.handleClickCalculateButton}>calculate</button>
        <h3>Answer</h3>
        <div>{this.state.summaN}</div>
      </div>
    );
  }
}

export default SummaN;