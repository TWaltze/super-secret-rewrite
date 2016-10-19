import React from 'react';
import TagLine from '../TagLine/TagLine.jsx';

const TagSection = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			title: 'Foobar'
		};
	},

	render: function() {
		let title = this.props.title;
		let tags = [
			{
				name: 'destIP'
			},
			{
				name: 'destPort'
			},
			{
				name: 'srcIP'
			},
			{
				name: 'srcPort'
			}
		];

		return (
			<div>
				<h5>{title}</h5>
				<ul className="list--selectable">
					{tags.map((tag) => (
						<TagLine
							className="list__item"
							key={tag.name}
							name={tag.name}
							onTagClick={this.props.onTagClick}
						/>
					))}
				</ul>
			</div>
		);
	}
});

export default TagSection;