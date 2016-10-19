import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Investigate from './components/Investigate/Investigate.jsx';
import './styles/less/styles.less';

let store = createStore(function(state = [], action) {
	return state;
});

// ReactDOM.render(<Investigate />, document.getElementById('app'));

render(
	<Provider store={store}>
		<Investigate />
	</Provider>,
	document.getElementById('app')
);