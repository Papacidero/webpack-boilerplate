var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/styles.scss');

class Message extends React.Component {
	render() {
		return <div>This is my Message!</div>
	}
}

ReactDOM.render(<Message />, document.getElementById('react-container'));

