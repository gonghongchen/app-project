import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import appState from "mobx/AppState";
import userBaseInfor from "mobx/baseInfor";
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import './base/base.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

configure({
  enforceActions: true,
  computedRequiresReaction: true
})

ReactDOM.render(
  <Provider store={appState} userBaseInfor={userBaseInfor}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
