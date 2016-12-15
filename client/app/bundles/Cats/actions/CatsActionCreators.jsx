/* eslint-disable import/prefer-default-export */

import { INCREMENT_TREAT } from '../constants/CatsConstants';

export const incrementTreat = (i) => ({
  type: INCREMENT_TREAT,
  i
});
