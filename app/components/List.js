var React = require('react')
var ListItem = require('./ListItem')

module.exports = React.createClass({
	getInitialState: function() {
		return {
			data: [
				'item one',
				'item two',
				'item three'
			]
		}
	},
	render: function () {
		var ListItems = this.state.data.map(function(data){
			return (
				<ListItem item={data} />
			)
		})

		return (
			<ol>
				{ListItems}
			</ol>
		)
	}
})
