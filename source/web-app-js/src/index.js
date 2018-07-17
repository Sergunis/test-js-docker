import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cssBootstrap from './bootstrap.4.1.1.min.css';
import style from './style.css';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Sum from './components/001 a+b';
import SummaN from './components/002 summa';

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

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome home stranger</h1>
    </div>
  );
};

const Nav = (props) => {
  return (
    <ul>
      <li><Link to="/sum">A+B</Link></li>
      <li><Link to="/summa">Summa N</Link></li>
    </ul>
  );
};

const Goback = () => {
  return (
    <div>&larr; <Link to="/">goback</Link></div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Welcome/>
        <Switch>
          <Route exact path="/" component={Nav}/>
          <Route component={Goback}/>
        </Switch>

        <Route path="/sum" component={Sum}/>
        <Route path="/summa" component={SummaN}/>
      </div>
    </Router>
  );
}


ReactDOM.render(<App/>, document.querySelector(`.${container_css_class}`));