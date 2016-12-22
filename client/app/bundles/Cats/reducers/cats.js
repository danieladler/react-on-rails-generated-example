import { ADD_CAT, INCREMENT_TREAT, UPDATE_CAT_ATTRS } from '../constants/CatsConstants';

const updateName = (state, action) => {
  const { index, name, color } = action;
  return [
    ...state.slice(0,index), // before the one we are updating
    {...state[index], name, color},
    ...state.slice(index + 1), // after the one we are updating
  ];
}

const cats = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CAT_ATTRS:
      console.log("updating attrs");
      return updateName(state, action);
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
      const lastCat = state[state.length - 1];
      const newId = lastCat ? lastCat.id + 1 : 0
      return [
        ...state, {
          id: newId,
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
