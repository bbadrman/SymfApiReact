import React from 'react';
import Field from '../components/forms/Field';

const InvoicePage = props => {
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