import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ColorContextProvider from './context/colorsContext';

ReactDOM.render(
  <ColorContextProvider>
  <App />
  </ColorContextProvider>, document.getElementById('root'));

serviceWorker.unregister();
