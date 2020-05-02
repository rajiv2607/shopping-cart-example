import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App'
import { Provider } from 'react-redux'
import store from './js/utils/createStore'


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
