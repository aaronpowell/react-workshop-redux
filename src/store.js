import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const enhancer = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
);

export default createStore(reducers, enhancer);
