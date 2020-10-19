import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

@inject("userStore")
@observer
class GoogleLogin extends Component {
  
    constructor(props){
        super(props);
        
        this.state = {
            activeItem : "login",
            email : props.match.params,
        }
    }

    handleItemClick = (e, { name }) =>{
       const {userStore}= this.props;
       console.log(name);
       if (name === '/login' && this.state.email==="" ){
        console.log("login");
           window.location.href="http://localhost:9003/oauth2/authorization/google";
        }

        if(name === '/logout'){
            this.setState({
                email : "",
     
            });
            userStore.logout();
            this.props.history.push("/");
        }else{
   
            this.setState({ 
                activeItem: name,
            });
        
            this.props.history.push(name);
        }
    }   

    render() {
        const {activeItem, email} = this.state;
        
        return (
            <div>
            {  email !== null && email !==""  ? ( 
                  <>
                    <Menu.Item
                        name='/books'
                        active={activeItem === '/books'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='/todos'
                        active={activeItem === '/todos'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='/logout'
                            active={activeItem === '/logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                   </>    
                 ) : 
                 ( 
                   <Menu.Menu position='right'>
                        <Menu.Item
                        name='/login'
                        active={activeItem === '/login'}
                        onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                 )
                }
                </div>
        );
    }
}

export default withRouter(GoogleLogin);