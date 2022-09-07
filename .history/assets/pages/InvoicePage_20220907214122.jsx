import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';
import Select from '../components/forms/Select';
import CustomersAPI from '../services/customersAPI';
import invoicesAPI  from '../services/invoicesAPI';
import axios from 'axios';
import { toast } from 'react-toastify';

const InvoicePage = ({ history, match }) => {
    const { id = "new" } = match.params;
    const [invoice, setInvoice] = useState({
        amount: "",
        customer: "",
        status: "SENT",
    });

    const [customers, setCustomers] = useState([]);
    const [editing, setEditing] = useState(false);
    const [errors, setErrors] = useState({
        amount: "",
        customer: "",
        status: "",
    });

    //Récuperation des clients
    const fetchCustomers = async () => {
        try {
            const data = await CustomersAPI.findAll();
            setCustomers(data);
            if (!invoice.customer) setInvoice({ ...invoice, customer: data[0].id });
        } catch (error) {
            toast.error("Impossible de charger les clients")
            history.replace("/invoices");
        }
    };

    // réuperation d'une facture
    const fetchInvoice = async id => {
        try {
            const { amount, status, customer } = await invoicesAPI.find(id);
            setInvoice({ amount, status, customer: customer.id });
        } catch (error) {
            //todo: Flash notification error
            history.replace('/invoices');
        }
    };

    // récupération de la lisete des clients a chaque chargement du composant 
    useEffect(() => {
        fetchCustomers();
    }, []);

    // recuperation de la bonne facture quand l'identifiant de l'url chnage
    useEffect(() => {
        if (id !== "new") {
            setEditing(true);
            fetchInvoice(id);
        }
    }, [id]);

    // Gestion du changements des inputs dans le formulaire
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setInvoice({ ...invoice, [name]: value });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            if (editing) {
                await invoicesAPI.update(id, invoice);
                //Flash notification success
                history.replace("/invoices");
            } else {
                 await invoicesAPI.create(invoice);
                //Flash notification success
                history.replace("/invoices");
            }

        } catch ({ response }) {
            const { violations } = response.data;

            if (violations) {
                const apiErrors = {};
                violations.forEach(({ propertyPath, message }) => {
                    apiErrors[propertyPath] = message;

                });
                setErrors(apiErrors);
            }
        }
    };

    return (
        <>
            {(editing && <h1>Modification d'une facture</h1>) || (<h1>Création d'une facture</h1>)}
            <form onSubmit={handleSubmit}>

                <Field name="amount" type='number' placeholder="Montant de la facture" label="Montant" onChange={handleChange} value={invoice.amount} error={errors.amount} /><br></br>

                <Select name="customer" label="Client" value={invoice.customer} onChange={handleChange} error={errors.customer} >
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </option>
                    ))}
                </Select><br></br>

                <Select name="status" label="Statut" value={invoice.status} error={errors.status} onChange={handleChange} >
                    <option value="SENT">Enoyée</option>
                    <option value="PAID">Payée</option>
                    <option value="CANCELLED">Annulée</option>

                </Select>
                <div className="form-group"><button type="submit" className="btn btn-success">Enregistrer</button>
                    <Link to="/invoices" className="btn btn-link">Retour aux factures</Link>
                </div>
            </form>
        </>
    );
};

export default InvoicePage;