import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Investigate from './components/Investigate/Investigate.jsx';
import App from './components/App/App.jsx';
import './styles/less/styles.less';

let store = createStore(function(state = [], action) {
	return state;
});

// ReactDOM.render(<Investigate />, document.getElementById('app'));

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/investigate" component={Investigate} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);