import React from 'react';
import ReactDOM from 'react-dom/server';
import util from 'util'

const vdom = (
  <div>
    <span className="greeting">Hello!</span>
  </div>
);

console.log(util.inspect(vdom, {depth: null, colors: true}));

const html = ReactDOM.renderToStaticMarkup(vdom);
console.log(html);
