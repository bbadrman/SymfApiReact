import axios from 'axios';
import CustomersAPI from "./customersAPI";

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

           
        });
    }

    function setup() {
        // 1.voire si on a un tocken?

        // 2.si le tocken est encore valide

        // 3. donner le tocken a axios 
    }

export default {
    authenticate,
    logout
}