import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';


const InvoicesPage = props => {
    return (
        <>
        <h1>Liste des Factures</h1>
        <table className="table table-hover">

            <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
        </table>
        </>
    );
};

export default InvoicesPage; 