import React,{ useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function LeftView(props) {
    const [activeItem, setActiveItem] = useState("home");
  
    const handleItemClick = (e, { name }) =>{
      setActiveItem({ activeItem: name });
      props.history.push(name);
     }   
    return (
        <div>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          /> 
        </div>
    );
}

export default withRouter(LeftView);