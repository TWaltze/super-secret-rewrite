import React from 'react';
import TagValue from '../TagValue/TagValue.jsx';

const ValueSelection = React.createClass({
	render: function() {
		let values = [
			{
				title: 'Foo'
			},
			{
				title: 'Bar'
			},
			{
				title: 'Foobar'
			}
		];

		return (
			<div { ...this.props }>
				{values.map((value) => (
					<TagValue
						className="list__item"
						key={value.title}
					/>
				))}
			</div>
		)
	}
});

export default ValueSelection;