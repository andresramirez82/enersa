import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/home';
import Header from '../components/Header/Header';
/*import Order from '../components/Order';
import Product from '../components/Product';
import Provider from '../components/Provider';*/

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/header" component={Header} />
				<Route exact path="/Providers/:id" component={Home} />
			</Switch>
		)
	}
}

export default Routes;