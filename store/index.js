import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

import {createWrapper} from 'next-redux-wrapper';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(makeStore, {debug: true})