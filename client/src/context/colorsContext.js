import React, {createContext} from 'react';
import globalCol from './globalColorsDB';

export default createContext({
  main: globalCol.mainGlobalColor,
  secondary1: globalCol.secondary1GlobalColor
})