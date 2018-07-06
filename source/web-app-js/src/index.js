import React from 'react';
import ReactDOM from 'react-dom';

const container_css_class = 'container';

function init() {
  let container = document.createElement('div');
  container.classList.add(container_css_class);

  return container;
}

document.body.appendChild(init());

const element = <h1>Oh my God! It's working!</h1>;

ReactDOM.render(element, document.querySelector(`.${container_css_class}`));