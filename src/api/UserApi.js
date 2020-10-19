import axios from 'axios';

class UserApi{
    URL="/users/"; // http://localhost:9003/users/"
    //OauthURL="/oauth2/";
    //email로 User정보 검색
    findUserByEmail(email){
        return axios.get(this.URL, email)
                .then((result)=>result && result.data ? result.data : null);
    }

    //target : google, naver, facebook 등 로그인
    //springsecurity에서 제공하는 url : /oauth2/authorization/google
    oauthLogin(target){
        return axios.get(this.URL+`${target}/`)
                .then((result)=>result && result.data ? result.data : null);
    }
    logout(){
        return axios.get(this.URL+'logout/')
                .then((result)=>result && result.data ? result.data : null);
    }
}

export default UserApi;