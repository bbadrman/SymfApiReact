import axios from 'axios';


function AuthenticatorResponse(credentials){
    axios
    .post("http://localhost:89/api/login_check", credentials)
    .then(response => response.data.token);

     setError(""); 

     //Je stocke le tocken dans localstorage
     window.localStorage.setItem("authToken", token);
     // On prévient Axios qu'on a maintenanat un header par defaut sur toutes les futures requetes http
     axios.defaults.headers["Authorization"] = "Bearer " + token;

}