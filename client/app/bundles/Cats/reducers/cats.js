import { INCREMENT_TREAT } from '../constants/CatsConstants';
import { ADD_CAT } from '../constants/CatsConstants';

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
    case ADD_CAT:
      console.log("adding a new cat");
      return [
        ...state, {
          name: action.values.name,
          color: action.values.color,
          treats: 0
        }
      ]
    default:
      return state;
  }
};

export default cats;
