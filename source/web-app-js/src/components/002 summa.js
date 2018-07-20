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
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChangeInput(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;

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

  handleEnter(event) {
    if (event.charCode == 13) {
      this.handleClickCalculateButton();
    }
  }

  handleClickCalculateButton() {
    let summaN = this.calculate(parseInt(this.state.n));
    this.setState({ summaN });
  }

  render() {
    return (
      <div>
        <h2>Summa</h2>
        <blockquote>Требуется посчитать сумму целых чисел, расположенных между числами 1 и N включительно.</blockquote>
        <h3>Input data</h3>
        <input autoFocus={true} className="form-control" name={'n'} onKeyPress={this.handleEnter} onChange={this.handleChangeInput} value={this.state.n}
               maxLength={5}/>

        <button className="btn btn-primary calculate-btn" onClick={this.handleClickCalculateButton}>calculate</button>
        <h3>Answer</h3>
        <div>{this.state.summaN}</div>
      </div>
    );
  }
}

export default SummaN;