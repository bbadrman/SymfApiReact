import axios from 'axios';

function register(user){
    return axios.post("http://localhost:89/api/users", user);
}
