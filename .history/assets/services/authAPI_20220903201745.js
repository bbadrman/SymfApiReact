import axios from 'axios';

function logout(){
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
   return axios
        .post("http://localhost:89/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            //Je stocke le tocken dans localstorage
            window.localStorage.setItem("authToken", token);
            // On prévient Axios qu'on a maintenanat un header par defaut sur toutes les futures requetes http
            axios.defaults.headers["Authorization"] = "Bearer " + token;

            return true;
        })
        .catch(error =>false);
}

export default {
    authenticate,
    logout
}