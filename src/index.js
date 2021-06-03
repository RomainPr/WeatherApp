// == Import : npm
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// == Import du store
import store from 'src/store';

// Import Semantic UI Css
import 'semantic-ui-css/semantic.min.css';

// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
