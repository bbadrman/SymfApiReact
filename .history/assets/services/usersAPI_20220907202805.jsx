import axios from 'axios';

function register(user){
    axios.post("http://localhost:89/api/users", user);
}