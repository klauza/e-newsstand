import React, { createContext, useReducer, useEffect } from 'react';
import { colorsReducer } from '../reducers/colorsReducer';


export const ColorContext = createContext();

const ColorContextProvider = (props) => {
/*
  // reducer, initial value, 3rd arg is a default value setter
  const [colors, dispatch] = useReducer(colorsReducer, {mainColor: '#000', secondaryColors: ['#fff', '#fff']}, async () => {
    // const localData = localStorage.getItem('colors');
    // return localData ? JSON.parse(localData) : {main: '#000', secondary: ['#fff', '#fff']};
    try{
      const res = await fetch('/api/admin/uicolors');
      const json = await res.json();
      return json
    }catch(err){
      console.log('error: ',err);
    }
  });
  */
  const [colors, setColors] = React.useState("");

  useEffect(() => {
    const fetchColors = async () => {
      try{
        const res = await fetch('/api/admin/uicolors');
        const json = await res.json();
        setColors(json[0]);
        localStorage.setItem('colors', JSON.stringify(json[0]));
      }catch(err){
        console.log('error: ',err);
      }
    }

    const localColors = localStorage.getItem('colors');
    
    localColors ? setColors(JSON.parse(localColors)) : fetchColors();


    // fetchColors();
    // localStorage.setItem('colors', JSON.stringify(colors));
  }, [])

  useEffect(()=>{
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors])

  // console.log(colors);

  // const addCar = (mark, owner) => {
  //   setCars([...cars, {mark: mark, owner: owner, id: uuid() }])
  // }

  // const removeCar = (id) => {
  //   setCars(cars.filter(car => car.id !== id));
  // }

  return(
    
    <ColorContext.Provider value={{colors, setColors}}>
    {/* <ColorContext.Provider value={{cars, addCar, removeCar}}> */}
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorContextProvider;