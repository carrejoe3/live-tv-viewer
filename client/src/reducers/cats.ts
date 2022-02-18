import { createReducer } from '../store';

const initialState = {
	list: []
};

const actions = {
	ADD_CAT: addCat
};

function addCat(state, action) {
	return {
		list: [...state.list, action.payload]
	};
}

export default createReducer(initialState, actions);
