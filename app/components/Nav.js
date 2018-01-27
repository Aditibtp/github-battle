var React  = require('react');
var ReactDom = require('react-dom');

//var Link = require('react-router-dom').Link; //creates anchor tag--fundamental to create anchor tag
//Link not needed because of NavLink
//Nav link composes of Link and adds some properties to it
var NavLink = require('react-router-dom').NavLink; //dynamically change the style of anchor tag if we are on it

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/battle">Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">Popular</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;

//exact ---> only apply the active class when the route we are on is exactly the same as specified
//without it HOME stays bold--class does not change without exact
