import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store/reducers'
// import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     
      <App/>
      
    </Provider>
  ,document.getElementById('root')
);

