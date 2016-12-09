/* eslint-disable import/prefer-default-export */

import { CAT_NAME_UPDATE } from '../constants/CatsConstants';

export const updateName = (text) => ({
  type: CAT_NAME_UPDATE,
  text,
});
