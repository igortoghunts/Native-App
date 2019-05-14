import mainReducer from './reducers';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(mainReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;
