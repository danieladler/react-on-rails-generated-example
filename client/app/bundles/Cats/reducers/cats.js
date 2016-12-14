// import { CAT_ADD_INSTANCE } from '../constants/CatsConstants';

const cats = (state = [], action) => {
  switch (action.type) {
    case "CAT_NAME_UPDATE":
      console.log("updating name");
      console.log(action.text);
      console.log(action.i);
    default:
      return state;
  }
};

export default cats;
