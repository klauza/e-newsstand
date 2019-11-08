import {createContext} from 'react';
import globalCol from './globalColorsDB';

export default createContext({
  mainGlobalColor: globalCol.mainDBColor,
  secondaryGlobalColors: globalCol.secondaryDBColors
})