import { applyMiddleware,compose } from 'redux';
import rootReducer from './../reducers/rootReducer';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(){
    return createStore(
        rootReducer,
        composeEnhancer(
        applyMiddleware(thunk))
    );
}