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
            {customers.map(customer => <tr key={customer.id}>
                <td>18</td>
                <td>
                    <a href="#">Badr Bechtioui</a>

                </td>
                <td>lior@sym.com</td>
                <td>Badrman</td>
                <td className="text-center">
                    <span className="btn btn-primary rounded">5</span>
                </td>
                <td className="text-center">64.000 Dhs</td>
                <td>
            <button className="btn btn-sm btn-danger">Supprimer</button>
                </td>
            </tr>)}
            
        </tbody>
    </table>
    </>
    );
}

export default CustomersPage ;