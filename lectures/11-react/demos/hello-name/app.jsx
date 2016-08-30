import React from 'react';
import ReactDOM from 'react-dom/server';
import util from 'util'

const Greeting = ({name}) => (
  <div>
    <span className="greeting">Hello, {name}!</span>
  </div>
);

const vdom = (
  <Greeting name="iofjuupasli" />
);

const html = ReactDOM.renderToStaticMarkup(vdom);
console.log(html);
