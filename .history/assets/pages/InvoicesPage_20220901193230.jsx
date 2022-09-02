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
        </table>
        </>
    );
};

export default InvoicesPage; 