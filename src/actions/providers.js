import axios from 'axios';

// -----------------------------------------------------------
// Action types
// -----------------------------------------------------------
export const SET_PROVIDER = 'SET_PROVIDER';
export const GET_PROVIDER = 'GET_PROVIDER';


// -----------------------------------------------------------
// Actions to be dispatched to the reducer
// -----------------------------------------------------------
export function setProvider(provider) {
	return { type: SET_PROVIDER, provider };
}
export function getProvider(provider) {
	return { type: GET_PROVIDER, provider };
}

export function fetchProviders() {
	return dispatch => {
		return axios.get('localhost:3005/providers')
			.then(response => dispatch(setProvider(response.data.providers)))
			.catch(error => console.log(error));
	}
}