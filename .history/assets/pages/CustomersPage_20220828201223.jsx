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
                <th className="text-center">Factures</th>
                <th className="text-center">Montant total</th>
                
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
                <td className="text-center">
                    <span className="btn btn-success rounded">5</span>
                </td>
                <td className="text-center">64.000 Dhs</td>
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