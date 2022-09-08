import axios from 'axios';
import Cache from './cache';

function find(id) {

    return axios
        .get("http://localhost:89/api/customers/" + id)
        .then(response => response.data);
}

async function findAll() {
    const cachedCustomers = await Cache.get("customers");
    if (cachedCustomers) return cachedCustomers;
    return axios
        .get('http://localhost:89/api/customers')
        .then(response => {
            const customers = response.data["hydra:member"];
            Cache.set("customers", customers);
            return customers;
        });
}

function deleteCustomer(id) {
    return axios
        .delete("http://localhost:89/api/customers/" + id)
        .then(async response =>{
            const cachedCustomers = await Cache.get("customers");
            if(cachedCustomers) {
                Cache.set("customers", cachedCustomers.filter(c=>c.id !== id));
            }
            return response;
        });
}

function update(id, customer) {
    return axios.put("http://localhost:89/api/customers/" + id, customer)
    .then(async response =>{
        const cachedCustomers = await Cache.get("customers");
        
        const index = cachedCustomers.findIndex(c => c.id === id);

        const newCachedCustomer = response.data;
        if(cachedCustomers) {
            Cache.set("customers", [...cachedCustomers, response.data]);
        }
        return response;
    });

}
function create(customer) {
    return axios.post("http://localhost:89/api/customers", customer)
    .then(async response =>{
        const cachedCustomers = await Cache.get("customers");
        if(cachedCustomers) {
            Cache.set("customers", [...cachedCustomers, response.data]);
        }
        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteCustomer

};