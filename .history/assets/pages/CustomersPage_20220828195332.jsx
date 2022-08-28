import React from 'react';

const CustomersPage = (props) => {
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
                <th>Factures</th>
                <th>Montant total</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>18</td>
                <td>18</td>
                <td>18</td>
                <td>
            <button className="btn btn-sm btn-danger">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
    </>
    );
}

export default CustomersPage ;