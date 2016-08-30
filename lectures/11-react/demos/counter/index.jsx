import React from 'react';
import ReactDOM from 'react-dom';

window.React = React;

import Counter from './components/Counter';

const html = ReactDOM.render(
  (<Counter />),
  document.getElementById('app')
);
