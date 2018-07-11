import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import cssBootstrap from './bootstrap.4.1.1.min.css';
import { HashRouter as Router, Link, NavLink, Route } from 'react-router-dom';

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
      <h1>Welcome home {props.name}!</h1>
      <button className="btn btn-primary">push me</button>
      <br/>
      <NavLink to="/dashboard">Dashboarh</NavLink>
      <br/>
      <Link to="/tacos">Tacos</Link>
    </div>
  );
};

const Dashboard = (props) => {
  return (
    <div>
      This is a dashboard!
    </div>
  );
};

const Carnitas = () => {
  return (
    <div>
      Carnitas
    </div>
  )
};

const Tacos = (props) => {
  const { match } = props;
  console.log(props);
  return (
    <div>
      <Link to={match.url + '/carnitas?get=343'}>carnitas</Link>
      <Route
        path={match.url + '/carnitas'}
        component={Carnitas}
      />
    </div>
  );

};

function App() {
  return (
    <Router>
      <div>
        <Welcome name="Man"/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/tacos" component={Tacos}/>
      </div>
    </Router>
  );
}


ReactDOM.render(<App/>, document.querySelector(`.${container_css_class}`));