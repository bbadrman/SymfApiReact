import moment from "moment";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Pagination from '../components/Pagination';
import InvoicesAPI from '../services/invoicesAPI';


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
    const itemsPerPage = 8;

    const fetchInvoices = async () => {
        try {
            const data = await InvoicesAPI.findAll();
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
    const handleSearch = ({ currentTarget }) => {
        setSearch(currentTarget.value);
        setCurrentPage(1);
    };

    // Gestion de la suppression
    const handleDelete = async id => {
        const originalinvoices = [...invoices];

        setInvoices(invoices.filter(invoice => invoice.id !== id));
        try {
            await InvoicesAPI.delete(id);
        } catch (error) {
            console.log(error.response);
            setInvoices(originalinvoices);
        }
    };


    // Gestion format du date 
    const formatDate = (str) => moment(str).format('DD/MM/YYYY');

    // Gestion de la recherche:
    const filteredInvoices = invoices.filter(
        i =>
            i.customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
            i.customer.lastName.toLowerCase().includes(search.toLowerCase()) ||
            i.amount.toString().startsWith(search.toLowerCase()) ||
            STATUS_LABELS[i.status].toLowerCase().includes(search.toLowerCase())
    );

    // Pagination des données
    const paginatedInvoices = Pagination.getData(
        filteredInvoices,
        currentPage,
        itemsPerPage
    );

    return (
        <>

            <div className="mb-2 d-flex justify-content-between align-items-center">
            <h1>Liste des Factures</h1>
            <Link to="/invoices/new" className='btn btn-primary'>Créer une facture</Link>

            </div>
            
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
                            <Link to={"/customers/" }>{invoice.customer.firstName} {invoice.customer.lastName} </a>
                        </td>
                        <td>{formatDate(invoice.sentAt)}</td>
                        <td className="text-center">
                            <span className={"btn btn-" + STATUS_CLASSES[invoice.status]}>{STATUS_LABELS[invoice.status]}</span>
                        </td>
                        <td>{invoice.amount.toLocaleString()} Dhs </td>
                        <td>
                            <Link to={"/invoices/"+ invoice.id} className="btn btn-sm btn-primary mr-1">Editer</Link>&nbsp;
                            <button className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(invoice.id)}>Supprimer</button>
                        </td>
                    </tr>)}

                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChanged={handlePageChange}
                length={filteredInvoices.length}

            />
        </>
    );
};

export default InvoicesPage; 