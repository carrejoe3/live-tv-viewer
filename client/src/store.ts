import { createStore, combineReducers } from 'redux';
import catReducer from './reducers/cats';

export const createReducer = (initialState, handlers) => {
	return (state = initialState, action) => {
		return (handlers[action.type] && handlers[action.type](state, action)) || state;
	};
};

const rootReducer = combineReducers({
	cats: catReducer
});

export default createStore(rootReducer, {});
