import React from 'react';
import { connect } from 'react-redux';
import { Main, Content } from './CreateCategoryModalCSS';
import { UIBtn } from '../../../../layout/ReusableComponents/UIButtons';
import { setAlert } from '../../../../../actions/alertActions';

const CreateCategoryModal = ({setAlert, setOpenCatCreator}) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [catName, setCatName] = React.useState(null);
  const [catType, setCatType] = React.useState("clothes");

  const name = React.useRef();
  const type = React.useRef();

  // open -> fire animation
  React.useEffect(()=>{
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(()=>{
      setOpenCatCreator(false);
    }, 500)
  }
  const submitForm = () => {
    if(catName !== null){
      setAlert(`New category "${catName}" was created`, "success", 2250);
      closeModal();
    } else {
      setAlert(`Please put a name of category`, "info", 2000);
      name.current.focus();
    }
    
  }

  return (
    <Main pose={isOpen ? "open" : "closed"}>
      <Content>
        <h3>Create new category</h3>

        <div className="category-form">
          {/* cat name */}
          <div className="category-form__input">
            <label htmlFor="">Category Name:</label>
            <input 
              type="text" 
              ref={name}
              onChange={(e)=>setCatName(e.target.value)}
            />
          </div>

          {/* cat type */}
          <div className="category-form__input">
            <label htmlFor="">Category Type:</label>
            <select onChange={(e)=>setCatType(e.target.value)} ref={type}>
              <option value="clothes" defaultValue>clothes</option>
              <option value="gadgets">gadgets</option>
            </select>
          </div>

          <div>Add Image</div>
          <div>Add Icon (?)</div>
        </div>

        <div className="buttons">
          <UIBtn exit innerText="Cancel" onClick={closeModal} />
          <UIBtn success innerText="Create" onClick={submitForm} />
        </div>
      </Content>

    </Main>
  )
}

export default connect(null, {setAlert})(CreateCategoryModal)