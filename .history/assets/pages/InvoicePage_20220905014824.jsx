import React, { useState } from 'react';
import Field from '../components/forms/Field';

const InvoicePage = props => {
    const [invoice, setInvoice] = useState({
        amount:"",
        customer: "",
        status: "",
    });

    const [errors, setErrors] = useState({
        amount:"",
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

                <Field name="amount" type='number' placeholder="Montant de la facture" label="Montant" onChange={handleChange} value={invoice.amount} error={error} />
            </form>
        </>
    );
};

export default InvoicePage;