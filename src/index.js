import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'styles/index.css';
import App from 'components/App';
import * as serviceWorker from 'helpers/serviceWorker';

import { Provider as ReduxProvider } from 'react-redux';
import store from 'store';

import 'lib/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
