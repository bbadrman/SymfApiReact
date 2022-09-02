import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import axios from "axios";
import moment from "moment";

const InvoicesPage = props => {

    const [invoices, setInvoices] = useState([]);

    const fetchInvoices = async () => {
        try {
            const data = await axios
                .get("http://localhost:89/api/invoices")
                .then(response => response.data["hydra:member"]);
            setInvoices(data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

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
                    {invoices.map(invoice => <tr key={invoice.id}>
                        <td>{invoice.chron}</td>
                        <td>
                            <a href="#">{invoice.customer.firstName} {invoice.customer.LastName} </a>
                        </td>
                        <td>{invoice.sentAt}</td>
                        <td>
                            <span className="btn btn-success">{invoice.status}</span>
                        </td>
                        <td>{invoice.amount.toLocaleString()} Dhs </td>
                        <td>
                            <button className="btn btn-sm btn-primary mr-1">Editer</button>&nbsp;
                            <button className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </>
    );
};

export default InvoicesPage; 