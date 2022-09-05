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
                <Select name="customer" label="client" value={invoice.customer} onChange={handleChange} error={errors.invoice}/>
                
                <div className="form-group">
                    <label htmlFor="customer">Client</label>
                    <select name="customer" id="customer" className="from-control">
                        <option value="1">Badr BECHTIOUI</option>
                        <option value="2">YAssine ECHARAFI</option>
                    </select>
                    <p className="invalid-feedback">erreur</p>
                </div>
            </form>
        </>
    );
};

export default InvoicePage;