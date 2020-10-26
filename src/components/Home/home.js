import React from 'react';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { GET_PROVIDER } from '../../actions/providers';


class HomePage extends React.Component {

    componentDidMount() {
		// this.props.fetchProviders();
	}

	render() {
        const providers = this.props.providers;
        console.log(providers);
		return (
			<div className='App-header'>header</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		provider: state.providers
	}
}

export default connect(mapStateToProps, { GET_PROVIDER })(HomePage);