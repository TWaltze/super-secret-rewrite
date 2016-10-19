import React from 'react';
import TagPicker from './TagPicker/TagPicker.jsx';
import ValueSelection from './ValueSelection/ValueSelection.jsx';

const Investigate = React.createClass({
	render: function() {
		return (
			<div className="investigate">
				<div className="investigate__sidebar">
					<TagPicker
						className="investigate__sidebar__tagPicker"
						onTagClick={(tag) => {
							console.log(`${tag.name} clicked!`);
						}}
					/>
					<ValueSelection className="investigate__sidebar__valueSelection active" />
				</div>
				<div className="investigate__main">
					Main body
				</div>
			</div>
		)
	}
});

export default Investigate;