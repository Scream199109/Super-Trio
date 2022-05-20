import React from 'react';
import './index.css';
import App from './components/App/App';
import * as ReactDOMClient from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render( <Provider store={store}><App /></Provider>);
