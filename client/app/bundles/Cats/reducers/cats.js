// import { CAT_ADD_INSTANCE } from '../constants/CatsConstants';

const cats = (state = [], action) => {
  console.log("the cat's name will change!");
  console.log("state and action:");
  console.log(state);
  console.log(action);
  // switch (action.type) {
  //   // case CAT_ADD_INSTANCE:
  //   case "CAT_ADD_INSTANCE":
  //     return action.text;
  //   default:
  //     return state;
  // }
  return state;
};

export default cats;
