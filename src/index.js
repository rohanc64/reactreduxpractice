import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers';
import App from  './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(Reducers,composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(
<Provider store={Store} >
<App/>
</Provider>
, document.querySelector('#root'));

