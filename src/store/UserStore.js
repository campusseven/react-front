import { Component } from 'react';
import { observable, computed, action } from "mobx";
import UserApi from "../api/UserApi";
class UserStore extends Component {
  
    userApi = new UserApi();

    @observable
    target="google"; //default : google  naver,facebook등 확장
  
    @observable
    user = {name:"", email:"",picture:""};

    @observable
    errorMessage="";
      
    @computed
    get getUser(){
        return this.user?{...this.user} : {};
    }

    @action
    setTodoProp(name, value) {
      this.todo = {
        ...this.user,
        [name]: value,
      };
    }

    @action
    async login(target){
        const userApiModel = await this.userApi.oauthLogin(target);
        userApiModel ? this.user={...userApiModel} : this.errorMessage = `${target} Sign in Fail!!`;
    }

    @action
    async logout(){
      this.userApi.logout();
      this.user={}
    }

    @action
    async findUserByEmail(email){
        const userApiModel = this.userApi.findUserByEmail(email);
        userApiModel ? this.user={...userApiModel} : this.errorMessage = `${email} Sign UP!!`;
    }

}

export default new UserStore();