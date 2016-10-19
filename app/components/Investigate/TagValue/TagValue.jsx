import React from 'react';

const TagValue = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		value: React.PropTypes.number
	},

	getDefaultProps: function() {
		return {
			name: 'Foobar',
			value: 0
		};
	},

	render: function() {
		let name = this.props.name;
		let value = this.props.value;

		return (
			<div className={`grid ${ this.props.className }`}>
				<div className="grid__col-1">{name}</div>
				<div>{value}</div>
			</div>
		)
	}
});

export default TagValue;