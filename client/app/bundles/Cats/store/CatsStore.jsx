import { createStore } from 'redux';
import CatsReducer from '../reducers/CatsReducer';

const configureStore = (railsProps) => (
  createStore(CatsReducer, railsProps)
);

export default configureStore;
