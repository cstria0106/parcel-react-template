import React from 'react';
import 'css-reset/reset.css';
import './styles/default.scss';

import ReactDOM from 'react-dom';
import { App } from './app';

const app = document.querySelector('#app');
ReactDOM.render(<App />, app);
