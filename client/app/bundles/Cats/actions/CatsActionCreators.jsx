/* eslint-disable import/prefer-default-export */

// import { CAT_NAME_UPDATE } from '../constants/CatsConstants';
// import { CAT_ADD_INSTANCE } from '../constants/CatsConstants';

export const updateName = (text, i) => ({
  // type: CAT_NAME_UPDATE,
  type: "CAT_NAME_UPDATE",
  text,
  i
});

export const addCat = (text) => ({
  type: "CAT_ADD_INSTANCE",
  text
})
