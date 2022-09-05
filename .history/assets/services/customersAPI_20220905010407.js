import axios from 'axios';

function find(id) {
    return axios
    .get("http://localhost:89/api/customers/" + id)
    .then(response => response.data); 
}
function findAll() {
    return axios
        .get('http://localhost:89/api/customers')
        .then(response => response.data["hydra:member"])
}

function deleteCustomer(id) {
    return axios
        .delete("http://localhost:89/api/customers/" + id)
}

export default {
    findAll,
    delete: deleteCustomer

};