import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import axios from "axios";

const InvoicesPage = props => {

    const [invoices, setInvoices] = useState([]);

    const fetchInvoices = async () => {
        return axios.get("http://localhost:89/api/invoices").then(response => response.data["hydra:member"])
    }

    useEffect(() => {}, []);

    return (
        <>
            <h1>Liste des Factures</h1>
            <table className="table table-hover">

                <thead>
                    <tr>
                        <td>Numéro</td>
                        <td>Clients</td>
                        <td>Date d'envoi</td>
                        <td>Status</td>
                        <td>Montant</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href="#">Badr BECHTIOUI </a>
                        </td>
                        <td>01/02/2023</td>
                        <td>
                            <span className="btn btn-success">Payée</span>
                        </td>
                        <td>1 200,00 Dhs </td>
                        <td>
                        <button className="btn btn-sm btn-primary mr-1">Editer</button>&nbsp;
                            <button className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default InvoicesPage; 