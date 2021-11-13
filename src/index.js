import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RenderToIndex from './RenderToIndex';
import {store} from './store/store';
import {Provider} from 'react-redux';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
  <RenderToIndex />
  </Provider>
</HashRouter>
  ,
  document.getElementById('root')
);


