var React  = require('react');
var ReactDom = require('react-dom');

var App = require('./components/App');
require('./index.css'); //works because of style-loader


ReactDom.render(
  <App />,
  document.getElementById('app')
)
