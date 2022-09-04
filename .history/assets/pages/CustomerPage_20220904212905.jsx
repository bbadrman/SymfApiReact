import React from 'react';
import Field from '../components/forms/Field';

const CustomerPage = props => {
    return (
    <>
    <h1>Création d'un client</h1>
    <form>
        <Field name="LastName" label="Nom de famille" placeholder="Nom de famille du client" required
    </form>
    </>
    );
};

export default CustomerPage;