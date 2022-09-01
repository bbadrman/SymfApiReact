import axios from 'axios';


function findAll(){
    return axios
    .get('http://localhost:89/api/customers')
    .then(response => response.data["hydra:member"])
}

export default {
    findAll
};