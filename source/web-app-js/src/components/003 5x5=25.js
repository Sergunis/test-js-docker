import React, { Component } from 'react';

class Square5 extends Component {
  constructor(props) {
    super(props);
  }

  rules() {
    return (
      <div>
        <blockquote>Вася и Петя учатся в школе в одном классе. Недавно Петя поведал Васе о хитром способе возведения в
          квадрат натуральных чисел, оканчивающихся на цифру 5. Теперь Вася может с легкостью возводить в квадрат
          двузначные (и даже некоторые трехзначные) числа, оканчивающиеся на 5. Способ заключается в следующем: для
          возведения в квадрат числа, оканчивающегося на 5 достаточно умножить число, полученное из исходного
          вычеркиванием последней пятерки на следующее по порядку число, затем остается лишь приписать «25» к
          получившемуся результату справа. Например, для того, чтобы возвести число 125 в квадрат достаточно 12 умножить
          на 13 и приписать 25, т.е. приписывая к числу 12*13=156 число 25, получаем результат 15625, т.е. 1252=15625.
          Напишите программу, возводящую число, оканчивающееся на 5, в квадрат для того, чтобы Вася смог проверить свои
          навыки.
        </blockquote>

        <blockquote>На вход подаем единственную строку с одним натуральным числом А, оканчивающееся на цифру 5, не
          превышающее 4*105.
        </blockquote>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h2>5x5=25</h2>

        {this.rules()}

        <h3>Input</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
              <input type="text" autoFocus name="number" className="form-control"/>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">Calc</button>
            </div>
          </div>
        </form>

        <h3>Output</h3>

        <table className="table table-dark">
          <thead>
          <tr>
            <th scope="col">Input</th>
            <th scope="col">Output</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Square5;
