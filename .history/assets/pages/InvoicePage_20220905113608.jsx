import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';
import Select from '../components/forms/Select';
import CustomersAPI from './services/customersAPI';

const InvoicePage = props => {
    const [invoice, setInvoice] = useState({
        amount: "",
        customer: "",
        status: "",
    });

    const [customers, setCustomers] = useState([]);
    const [errors, setErrors] = useState({
        amount: "",
        customer: "",
        status: "",
    });

    const fetchCustomers = async () => {
        try {
            const data = await CustomersAPI.findAll();
            setCustomers(data);
        } catch (error) {
            console.log(error.reponse);
        }
    }

    useEffect(() => {
        fetchCustomers();
    }, [])

    // Gestion du changements des inputs dans le formulaire
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setInvoice({ ...invoice, [name]: value });
    };
    return (
        <>
            <h1>Creation d'une facture</h1>
            <form action="">

                <Field name="amount" type='number' placeholder="Montant de la facture" label="Montant" onChange={handleChange} value={invoice.amount} error={errors.amount} />

                <Select name="customer" label="client" value={invoice.customer} onChange={handleChange} error={errors.customer} >
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>
                            {customer.firstName}{customer.lastName}
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