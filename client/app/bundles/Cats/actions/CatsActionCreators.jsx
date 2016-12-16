/* eslint-disable import/prefer-default-export */

import { INCREMENT_TREAT } from '../constants/CatsConstants';

export const incrementTreat = (index) => ({
  type: INCREMENT_TREAT,
  index
});
