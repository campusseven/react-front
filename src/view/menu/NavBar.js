import React from 'react'
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import LeftView from '../LeftView';
import GoogleLogin from '../../container/GoogleLogin';

function NavBar(props) {
   return (
      <Menu pointing secondary>
          <LeftView/>  
          <GoogleLogin />
      </Menu>
    )
}

export default withRouter(NavBar);