import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';
import Select from '../components/forms/Select';
import CustomersAPI from '../services/customersAPI';
import invoicesAPI  from '../services/invoicesAPI';
import axios from 'axios';

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

    const fetchCustomers = async () => {
        try {
            const data = await CustomersAPI.findAll();
            setCustomers(data);
            if (!invoice.customer) setInvoice({ ...invoice, customer: data[0].id });
        } catch (error) {
            console.log(error.reponse);
        }
    };

    const fetchInvoice = async id => {
        try {
            const data = await axios.get("http://localhost:89/api/invoices/" + id).then(response => response.data);

            const { amount, status, customer } = data;
            setInvoice({ amount, status, customer: customer.id });
        } catch (error) {
            console.log(error.reponse);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    useEffect(() => {
        if (id !== "new") {
            setEditing(true);
            fetchInvoice(id);
        }
    }, [id]);

    // Gestion du changements des inputs dans le formulaire
    const handleChange = event => {
        setInvoice({
            ...invoice, sentAt: new Date(), chron: Math.floor(Math.random() * 100)
            , [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            if (editing) {
                const response = await axios.put("http://localhost:89/api/invoices/" + id,
                    {
                        ...invoice, customer: `/api/customers/${invoice.customer}`
                    });
                //Flash notification success
                console.log(response);
            } else {
                const response = await axios.post("http://localhost:89/api/invoices",
                    {
                        ...invoice, customer: `/api/customers/${invoice.customer}`
                    }
                );
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

                <Field name="amount" type='number' placeholder="Montant de la facture" label="Montant" onChange={handleChange} value={invoice.amount} error={errors.amount} />

                <Select name="customer" label="Client" value={invoice.customer} onChange={handleChange} error={errors.customer} >
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>
                            {customer.firstName} {customer.lastName}
                        </option>
                    ))}
                </Select>

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