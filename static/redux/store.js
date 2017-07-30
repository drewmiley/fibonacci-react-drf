import {
	compose,
	createStore
} from 'redux';

import { setState } from './counters';
import reducer from './counters';

const createStoreDevTools = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

const initialState = {
	frameworkScores: [
		{ name: 'Ractive', score: 0 },
		{ name: 'React', score: 0 },
		{ name: 'Riot', score: 0}
	]
};

store.dispatch(setState(initialState));

export default store;
