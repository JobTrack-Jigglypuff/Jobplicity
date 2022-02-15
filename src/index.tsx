import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import './styles/index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
