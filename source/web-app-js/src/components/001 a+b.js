import React, { Component } from 'react';

class Sum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0
    };
  }

  render() {
    return (
      <div>
        <h2>A+B</h2>
        <form className="form-inline">
          <input type="text" name="a" value={this.state.a} className="form-control" maxLength={9}/>
          +
          <input type="text" name="b" value={this.state.b} className="form-control" maxLength={9}/>
          =

        </form>
        <div>
          <button className="btn btn-info">Calculate</button>
        </div>


      </div>

    );
  }
}

export default Sum;