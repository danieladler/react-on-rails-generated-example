// import { CAT_ADD_INSTANCE } from '../constants/CatsConstants';

const cat = (state = {}, action) => {
  switch (action.type) {
    case "CAT_NAME_UPDATE":
      console.log("triggered within singular CAT constant");
      return Object.assign({}, state, {
        name: action.text
      })
      console.log(state);

    default:
      return state
  }
};

const cats = (state = [], action) => {
  switch (action.type) {
    case "CAT_NAME_UPDATE":
      console.log("triggered within CATS");
      // const i = action.index;
      // const newName = action.next
      // return [
      //   ...state.slice(0,i),
      //   {...state[i], name: newName},
      //   ...state.slice(0, i+1)

    // first alternate array manipulation approach:
      // ...state.slice(0,i),
      // .concat([state[i], name: action.text])
      // .concat(state.slice(i+1))

    // second alternate array manipulation approach:
      // ...state.slice(0,i),
      // state[i][name] = action.text,
      // ...state.slice(i+1)
    // ]

    // maybe this is also a way to return the right state?
      // return [
      //   state.map(c =>
      //     cat(c, action)
      //   )
      // ]

    // orrrr maybe this is a way?
      // return Object.assign({}, state, {
      //   cats: [
      //     ...state.cats,
      //     {
      //       name: action.text
      //     }
      //   ]
      // })
    default:
      return state;
  }
};

export default cats;
