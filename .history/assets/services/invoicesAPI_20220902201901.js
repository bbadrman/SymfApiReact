import axios from 'axios';


function findAll() {
    return axios
        .get('http://localhost:89/api/invoices')
        .then(response => response.data["hydra:member"])
}

function deleteInvoices(id) {
    return axios
        .delete("http://localhost:89/api/invoices/" + id)
}

export default {
    findAll,
    delete: deleteInvoices

};