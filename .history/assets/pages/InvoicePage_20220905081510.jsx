import React, { useState } from 'react';
import Field from '../components/forms/Field';
import Select from '../components/forms/Select';

const InvoicePage = props => {
    const [invoice, setInvoice] = useState({
        amount: "",
        customer: "",
        status: "",
    });

    const [errors, setErrors] = useState({
        amount: "",
        customer: "",
        status: "",
    });

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

                <option value="1">Badr BECHTIOUI</option>
                <option value="2">YAssine ECHARAFI</option>

            </Select>
            <Select name="status" label="Statut" value={invoice.status} error={invoice.
        </form>
        </>
    );
};

export default InvoicePage;