// @flow

import React, { Component } from 'react';

const Rules = () => {
  return (
    <div>
      <blockquote>Вася и Петя учатся в школе в одном классе. Недавно Петя поведал Васе о хитром способе возведения в
        квадрат натуральных чисел, оканчивающихся на цифру 5. Теперь Вася может с легкостью возводить в квадрат
        двузначные (и даже некоторые трехзначные) числа, оканчивающиеся на 5. Способ заключается в следующем: для
        возведения в квадрат числа, оканчивающегося на 5 достаточно умножить число, полученное из исходного
        вычеркиванием последней пятерки на следующее по порядку число, затем остается лишь приписать «25» к
        получившемуся результату справа. Например, для того, чтобы возвести число 125 в квадрат достаточно 12 умножить
        на 13 и приписать 25, т.е. приписывая к числу 12*13=156 число 25, получаем результат 15625, т.е. 125<sup>2</sup>=15625.
        Напишите программу, возводящую число, оканчивающееся на 5, в квадрат для того, чтобы Вася смог проверить свои
        навыки.
      </blockquote>

      <blockquote>На вход подаем единственную строку с одним натуральным числом А, оканчивающееся на цифру 5, не
        превышающее 4*10<sup>5</sup>.
      </blockquote>
    </div>
  );
};

type State = {
  value: string,
  errorValue: boolean,
  input: string,
  output: string
}

class Square5 extends Component<{}, State> {
  constructor(props: Object) {
    super(props);

    this.state = {
      value: '',
      errorValue: false,
      input: '—',
      output: '—'
    };

    this.handleTyping = this.handleTyping.bind(this);
  }

  lastIs5 = (value: number): boolean => {
    const str = value.toString();
    return parseInt(str[str.length - 1]) === 5;
  };

  calculate = (value: number) => {
    let output;

    if (this.lastIs5(value)) {
      output = Math.pow(value, 2);
    } else {
      output = '—';
    }

    return output;
  };

  validate = (value: number): boolean => {
    return isNaN(value) || value > 400000;
  };

  handleSubmit = (event: Object) => {
    event.preventDefault();

    const value = parseInt(this.state.value);

    if (this.validate(value)) {
      this.setState({
        errorValue: true,
        input: '—',
        output: '—'
      });
    } else {
      this.setState({
        value: value.toString(),
        input: value.toString(),
        output: this.calculate(value).toString()
      });
    }
  };

  handleTyping = (event: Object) => {
    if (this.state.errorValue) {
      this.setState({ errorValue: false });
    }
    this.setState({
      value: event.target.value
    });
  };

  render() {

    let input;
    let classInput = '';

    if (this.state.errorValue) {
      classInput = 'is-invalid';
    }

    return (
      <div>
        <h2>5x5=25</h2>

        <Rules/>

        <h3>Input</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
              <input
                type="text"
                autoFocus="on"
                autoComplete="off"
                name="number"
                maxLength={6}
                onChange={this.handleTyping}
                value={this.state.value}
                className={`form-control ${classInput}`}
              />
              <div className="invalid-feedback">
                Please provide a valid number.
              </div>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">Calculate</button>
            </div>

          </div>
        </form>

        <h3>Output</h3>

        <table className="table table-dark">
          <thead>
          <tr>
            <th scope="col">Input</th>
            <th scope="col">input<sup>2</sup></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.state.input}</td>
            <td>{this.state.output}</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Square5;
