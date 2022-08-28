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
                <td>
                    <a href="#">Badr Bechtioui</a>

                </td>
                <td>lior@sym.com</td>
                <td>Badrman</td>
                <td>
                    <span className="badge badge-light">5</span>
                </td>
                <td>64.000 Dhs</td>
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