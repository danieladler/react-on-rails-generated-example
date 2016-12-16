import { INCREMENT_TREAT } from '../constants/CatsConstants';

// const cat = (state = {}, action) => {
//   switch (action.type) {
//     case INCREMENT_TREAT:
//       console.log("triggered within singular CAT constant");
//       console.log(i);
//     default:
//       return state
//   }
// };

const cats = (state = [], action) => {
  switch (action.type) {
    case INCREMENT_TREAT:
      console.log("incrementing treats");
      const index = action.index;
      return [
        ...state.slice(0,index), // before the one we are updating
        {...state[index], treats: state[index].treats + 1},
        ...state.slice(index + 1), // after the one we are updating
      ];
    default:
      return state;
  }
};

export default cats;
