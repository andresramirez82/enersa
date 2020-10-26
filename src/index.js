import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Redux
import { createStore, applyMiddleware } from 'redux';
// Redux Provider for React
import { Provider } from 'react-redux';
// Redux Middlewares
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Routes from './routes/Routes';
// Root reducer to use in Redux Store
import rootReducer from './reducers/rootReducers';
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
 
//ReactDOM.render(<Menu />, document.getElementById('root'));
 
// Browser history
const history = createBrowserHistory();



// Redux store
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Routes />
			</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: 
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: 
reportWebVitals();
