import { combineReducers } from 'redux';
import cats from "./cats"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  cats,
  form: formReducer
});

export default rootReducer;
