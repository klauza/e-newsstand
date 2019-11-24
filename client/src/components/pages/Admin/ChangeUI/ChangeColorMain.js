import React, {Fragment} from 'react'
import ColorContext from '../../../../context/colorsContext';
import { Header, Colors, ColorItem, SecondaryColor } from './ChangeUICSS';
import axios from 'axios';

const ChangeColorMain = ({globalColors, setUpdating}) => {

  // const { setColors } = React.useContext(ColorContext);

  const dispatchNewColors = async (data) => {  
    setUpdating(true);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await axios.put('/api/admin/uicolors', data, config)
    localStorage.setItem('colors', JSON.stringify(data));
    window.location.reload(true);
  }

  return (
    <Fragment>
      <Header style={{marginTop: "25px"}}>Change color scheme</Header>
      <Colors>
        <div className="global-colors-header">Pick your color palette</div>

        <div className="color-div-items-header">
          <div />
          <div />
          <div>Main color</div>
          <div>Secondary colors</div>
        </div>

        {globalColors.map((col, id) =>
          <ColorItem key={id} mainColor={col.main} secondaryQty={col.secondary.length}>
            <button onClick={()=>dispatchNewColors({mainColor: col.main, secondaryColors: col.secondary, title: "mr-michael"})}><i className="fa fa-check"></i></button>
            <span />
            <div className="global-color global-colors-container">
              <div className="global-color__main"></div>
              <div className="global-color__secondary-colors">
                {col.secondary.map((sec, ids)=> <SecondaryColor key={ids} secondaryColor={sec}></SecondaryColor> )}
              </div>
            </div>
          </ColorItem>
        )}
      </Colors>
    </Fragment>
  )
}

export default ChangeColorMain