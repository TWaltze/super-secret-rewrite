import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Investigate from './components/Investigate/Investigate.jsx';
import './styles/less/styles.less';

let store = createStore(function(state = [], action) {
	return state;
});

// ReactDOM.render(<Investigate />, document.getElementById('app'));

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/build/investigate" component={Investigate} />
		</Router>
	</Provider>,
	document.getElementById('app')
);