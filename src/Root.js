import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import aysnc from './middlewares/aysnc';
import stateValidator from './middlewares/stateValidator';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(aysnc, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
