import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(reducers);

export default store;
