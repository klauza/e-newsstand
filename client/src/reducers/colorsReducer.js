

export const colorsReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_COLOR':
      return {
        main: action.color.main, 
        secondary: action.color.secondary
      }


    default:
      return state
  }
}