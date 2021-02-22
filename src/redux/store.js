import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import episodeReducer from './episodesDucks';
import characterReducer from './charactersDucks';

const rootReducer = combineReducers({
    episodes: episodeReducer,
    characters: characterReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk) ));
    return store;
}
