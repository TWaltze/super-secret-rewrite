import React from 'react';

const TagLine = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		count: React.PropTypes.number
	},

	getDefaultProps: function() {
		return {
			name: 'Foobar',
			count: 0
		};
	},

	render: function() {
		let name = this.props.name;
		let count = this.props.count;

		let onTagNameClick = () => {
			this.props.onTagClick({
				name
			});
		}

		return (
			<div className={`grid ${ this.props.className }`}>
				<div
					className="grid__col-1"
					onClick={onTagNameClick}
				>{name}</div>
				<div>{count}</div>
			</div>
		)
	}
});

export default TagLine;