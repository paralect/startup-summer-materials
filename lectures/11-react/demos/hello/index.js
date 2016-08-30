const React = require('react');
const ReactDOM = require('react-dom/server');

const h = React.createElement;

const virtualDom =
  h('div', null,
    h('span', { className: 'greeting' }, 'Hello!')
  );

const html = ReactDOM.renderToStaticMarkup(virtualDom);

console.log(html);
