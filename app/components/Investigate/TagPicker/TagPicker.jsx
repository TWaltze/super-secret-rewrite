import React from 'react';
import TagSection from '../TagSection/TagSection.jsx';

const TagPicker = React.createClass({
	render: function() {
		const sharedProps = Object.assign({}, this.props);
		delete sharedProps.onTagClick;

		let sections = [
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
			<div { ...sharedProps }>
				{sections.map((section) => (
					<TagSection
						className="list__item"
						key={section.title}
						title={section.title}
						onTagClick={this.props.onTagClick}
					/>
				))}
			</div>
		)
	}
});

export default TagPicker;