/* eslint-disable import/prefer-default-export */

import { INCREMENT_TREAT } from '../constants/CatsConstants';
import { ADD_CAT } from '../constants/CatsConstants';

export const incrementTreat = (index) => ({
  type: INCREMENT_TREAT,
  index
});

export const addCat = (values) => ({
  type: ADD_CAT,
  values
})
