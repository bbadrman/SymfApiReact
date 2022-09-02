import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import axios from "axios";
import moment from "moment";

const STATUS_CLASSES = {
 PAID: "success",
 SENT: "primary",
 CANCELLED: "danger"
};

const STATUS_LABELS = {
    PAID: "Payée",
    SENT: "Envoyée",
    CANCELLED: "Annulée"
   }

const InvoicesPage = props => {

    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

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

     // Gestion du changement de page
     const handlePageChange = page => setCurrentPage(page);

     //Gestion de la recherche
     const handleSearch = ({ currentTarget}) => {
         setSearch(currentTarget.value);
         setCurrentPage(1);
 
     };
     // changer les nombre customer par page on a 8 
     const itemsPerPage = 8;

    const formatDate = (str) => moment(str).format('DD/MM/YYYY');

    // Gestion de la recherche:
    const filteredInvoices = invoices.filter(
        i =>
         i.customer.LastName.toLowerCase().includes(search.toLocaleLowerCase)
    )
     // Pagination des données
     const paginatedInvoices = Pagination.getData(
        invoices,
        currentPage,
        itemsPerPage
    );

    return (
        <>
            <h1>Liste des Factures</h1>
            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-controle" placeholder="Rechercher.." />
            </div>
            <table className="table table-hover">

                <thead>
                    <tr>
                        <td>Numéro</td>
                        <td>Clients</td>
                        <td>Date d'envoi</td>
                        <td className="text-center">Status</td>
                        <td>Montant</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {paginatedInvoices.map(invoice => <tr key={invoice.id}>
                        <td>{invoice.chron}</td>
                        <td>
                            <a href="#">{invoice.customer.firstName} {invoice.customer.LastName} </a>
                        </td>
                        <td>{formatDate(invoice.sentAt)}</td>
                        <td className="text-center">
                            <span className={"btn btn-" + STATUS_CLASSES[invoice.status]}>{STATUS_LABELS[invoice.status]}</span>
                        </td>
                        <td>{invoice.amount.toLocaleString()} Dhs </td>
                        <td>
                            <button className="btn btn-sm btn-primary mr-1">Editer</button>&nbsp;
                            <button className="btn btn-sm btn-danger">Supprimer</button>
                        </td>
                    </tr>)}

                </tbody>
            </table>

            <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    onPageChanged={handlePageChange}
                    length={invoices.length}
                   
                />
        </>
    );
};

export default InvoicesPage; 