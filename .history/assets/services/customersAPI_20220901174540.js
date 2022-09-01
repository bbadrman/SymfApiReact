import axios from 'axios';


function findAll() {
    return axios
        .get('http://localhost:89/api/customers')
        .then(response => response.data["hydra:member"])
}

function deleteCustomer() {
    return axios
        .delete("http://localhost:89/api/customers/" + id)
}

export default {
    findAll,
    delete: deleteCustomer

};