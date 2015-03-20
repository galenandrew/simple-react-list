var React = require('react');
var Headline = require('./components/Headline');
var List = require('./components/List');

var App = React.createClass({
	render: function () {
		return (
			<div class="container">
				<Headline />
				<List />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
