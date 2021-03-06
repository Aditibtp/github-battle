var React  = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types')


function PlayerPreview (props) {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={props.avatar} alt={props.username} />
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = PlayerPreview;
