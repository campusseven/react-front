import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function NavBar(props) {
  const [activeItem, setActiveItem] = useState("home");
  const [session, setSession] = useState("false");

  const handleItemClick = (e, { name }) =>{
    setActiveItem({ activeItem: name });
    props.history.push(name);
   }   
  
   return (
      <div>
        { session ? ( 
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
        
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
          </Menu>
          ) : (
            <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='books'
            active={activeItem === 'books'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='todos'
            active={activeItem === 'todos'}
            onClick={handleItemClick}
          />
        
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
          </Menu>
          )
      }
      </div>
    )
}

export default withRouter(NavBar);