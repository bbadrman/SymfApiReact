import axios from 'axios';
import Cache from './cache';

function find(id) {

     return axios
    .get("http://localhost:89/api/customers/" + id)
    .then(response => response.data); 
}

async function findAll() {
    const cachedCustomers = await Cache.get("customers");
   if(cachedCustomers) return cachedCustomers;
    return axios
        .get('http://localhost:89/api/customers')
        .then(response => response.data["hydra:member"])
}

function deleteCustomer(id) {
    return axios
        .delete("http://localhost:89/api/customers/" + id)
}

function update(id, customer) {
    return axios.put("http://localhost:89/api/customers/" + id, customer);
              
}
function create(customer) {
    return axios.post("http://localhost:89/api/customers", customer);
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteCustomer

};