import { combineReducers } from 'redux';
import cats from "./cats"
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  cats,
  form: formReducer
});

export default rootReducer;


/*
{
  cats: responseFromCatsReducer(previousState.cats)
}

{
  cats: []
}

{
  cats: [{}, {}, {}]
}

{
  cats: [],
  form: {
    catForm: {
      name: 'Flip',
      id: 0,
    }
  }
}


{
  form: {
    cat-form-1: {
      name: 'Flip',
      id: 0,
    }
    cat-form-2: {
      name: 'Flip',
      id: 0,
    }
  }
}

*/
