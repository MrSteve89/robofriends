import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMidlleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import {searchRobots, requestRobots} from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMidlleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	<App />
    </Provider>	
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your Card to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
