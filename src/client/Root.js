
import React from 'react';
import Router from 'react-router/lib/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';

const initialState = {
  message: 'Click me.',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      return { message: 'That was some Redux!' };
      break;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  );
}

export default Root;
