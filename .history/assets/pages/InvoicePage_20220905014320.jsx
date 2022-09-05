import React, { useState } from 'react';
import Field from '../components/forms/Field';

const InvoicePage = props => {
    const [invoice, setInvoice] = useState({
        amount:"",
        customer: "",
        status: "",
    });

    const [error]
    return (
        <>
            <h1>Creation d'une facture</h1>
            <form action="">

                <Field name="amount" type='number' placeholder="Montant de la facture" label="Montant" onChange={handleChange} value={} />
            </form>
        </>
    );
};

export default InvoicePage;