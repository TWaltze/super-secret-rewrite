import React from 'react';
import { Link } from 'react-router'

const App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<ul className="navigation">
					<div className="navigation__logo">
						<div className="logo__square logo__square--no-margin-top"></div>
						<div className="logo__square logo__square--clear"></div>
						<div className="logo__square"></div>
						<div className="logo__square logo__square--accent logo__square--clear"></div>
						<div className="logo__square"></div>
						<div className="logo__square logo__square--no-margin-left"></div>
					</div>


					<Link to="/" className="navigation__item">Home</Link>
					<Link to="/investigate" className="navigation__item">Investigate</Link>
				</ul>

				<div className="page">
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;