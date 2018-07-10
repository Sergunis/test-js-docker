import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cssBootstrap from './bootstrap.4.1.1.min.css';

const container_css_class = 'container';

function init() {
  let container = document.createElement('div');
  container.classList.add(container_css_class);

  // let bootstrap = document.createElement('link');
  // bootstrap.rel = 'stylesheet';
  // bootstrap.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
  // bootstrap.integrity = 'sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB';
  // bootstrap.crossOrigin = 'anonymous';
  //
  // document.head.appendChild(bootstrap);

  return container;
}

document.body.appendChild(init());

function Welcome(props) {
  return (
    <Fragment>
      <h1>Welcome home {props.name}!</h1>
      <button className="btn btn-primary">push me</button>
    </Fragment>
  )
}

function App() {
  return (
    <div>
      <Welcome name="Man"/>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector(`.${container_css_class}`));