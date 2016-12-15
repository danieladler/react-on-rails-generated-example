import { INCREMENT_TREAT } from '../constants/CatsConstants';

const cat = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT_TREAT:
      console.log("triggered within singular CAT constant");

    default:
      return state
  }
};

const cats = (state = [], action) => {
  switch (action.type) {
    case INCREMENT_TREAT:
      console.log("triggered within CATS array constant");
    default:
      return state;
  }
};

export default cats;
