import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';


const InvoicesPage = props => {
    return (
        <>
        <h1>Liste des Factures</h1>
        <table className="table table-hover">

            <thead>
                <tr>
                    <td>Numéro</td>
                    <td>Clients</td>
                    <td>Montant</td>
                    <td>Status</td>
                    <td>Montant</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Badr BECHTIOUI</td>
                    <td>1 200,00 Dhs </td>
                    <td>
                        <span className="badge badge-success"></span>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default InvoicesPage; 