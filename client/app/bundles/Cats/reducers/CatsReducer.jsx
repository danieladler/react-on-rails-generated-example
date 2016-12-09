import { combineReducers } from 'redux';
import { CAT_NAME_UPDATE } from '../constants/CatsConstants';

const cats = (state = '', action) => {
  switch (action.type) {
    case CAT_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const CatsReducer = combineReducers({ cats });

export default CatsReducer;
