import axios from 'axios';
import jwtDecode from 'jwt-decode';

/**
 * Déconnection(suppression du tocken du localStorage et sr axios )
 */
function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}
/**
 * Requéte HTTP Authentication et storage du token dans le storage et sur axios
 * @param {object} credentials 
 *
 */
function authenticate(credentials) {
    return axios
        .post("http://localhost:89/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            //Je stocke le tocken dans localstorage
            window.localStorage.setItem("authToken", token);
            // On prévient Axios qu'on a maintenanat un header par defaut sur toutes les futures requetes http
            setAxiosToken(token);


        });
}
/**
 * positionne le token JWT sur Axios
 * @param {string} token le token JWT
 */
function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
    // 1.voire si on a un tocken?
    const token = window.localStorage.getItem("authToken");
    // 2.si le tocken est encore valide
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
        }
    }

}

function isAuthenticated() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return true;
        }
        return false;
    }
    return false;
}

    export default {
        authenticate,
        logout,
        setup,
        isAuthenticated
    }