import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; 
import { applyMiddleware, compose } from 'redux';


    const store = configureStore({
        reducer: rootReducer,
        middleware: [thunk],
        devTools: typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    });

export default store;