import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CustomersPage = (props) => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => { 
        axios
        .get('http://localhost:89/api/customers')
        .then(response => response.data["hydra:member"])
        .then(data => setCustomers(data))
        .catch(error => console.log(error.response)); 
}, []);

const handleDelete = id => {
    console.log(id);

    const originalCustomer = [...customers];

    // 1. L'approche optimiste
    setCustomers(customers.filter(customer => customer.id !== id))

    // 2. L'approche pessimiste
    axios
    .delete("http://localhost:89/api/customers/" + id)
    .then(response => )
    .catch(error => console.log(error.response));
};
    return ( 
    <>
    <h1>Liste des clients</h1>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Id.</th>
                <th>CLient</th>
                <th>Email</th>
                <th>Entreprise</th>
                <th className="text-center">Factures</th>
                <th className="text-center">Montant total</th>
                
            </tr>
        </thead>
        <tbody>
            {customers.map(customer => (
            <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                    <a href="#">{customer.firstName} {customer.lastName}</a>

                </td>
                <td>{customer.email}</td>
                <td>{customer.company}</td>
                <td className="text-center">
                    <span className="btn btn-primary rounded">{customer.invoices.length}</span>
                </td>
                <td className="text-center">{customer.totalAmount.toLocaleString()} Dhs</td>
                <td>
            <button 
            onClick={() => handleDelete(customer.id)}
            disabled={customer.invoices.length > 0} 
            className="btn btn-sm btn-danger">Supprimer</button>
                </td>
            </tr>))}
            
        </tbody>
    </table>
    </>
    );
}

export default CustomersPage ;