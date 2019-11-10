import React, {Fragment} from 'react'
import ColorsContext from '../../../../context/colorsContext';
import { Header, Colors, ColorItem, SecondaryColor } from './ChangeUICSS';

const ChangeColorMain = ({globalColors}) => {

  const colorContext = React.useContext(ColorsContext);

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
            <button onClick={()=>colorContext.setGlobalColors(col.main, col.secondary)}><i className="fa fa-check"></i></button>
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