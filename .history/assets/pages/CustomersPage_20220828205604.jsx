import React, { useEffect, useState} from 'react';
import axios from 'axios';

const CustomersPage = (props) => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => { 
        axios
        .get('http://localhost:89/api/customers')
        .then(response => response.data["hydra:member"])
        .then(data => setCustomers(data)); 
}, []);
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
            {customers.map(customer => )}
            
        </tbody>
    </table>
    </>
    );
}

export default CustomersPage ;