import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import configureStore from '../store/CatsStore';
import CatsContainer from '../containers/CatsContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const CatsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <CatsContainer />
  </Provider>
);

export default CatsApp;
