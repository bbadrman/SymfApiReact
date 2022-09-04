import React from 'react';
import Field from '../components/forms/Field';

const CustomerPage = props => {
    return (
    <>
    <h1>Création d'un client</h1>
    <form>
        <Field name="lastName" label="Nom de famille" placeholder="Nom de famille du client" />
        <Field name="firstName" label="Prénom" placeholder="Nom de famille du client" />
        <Field name="email" label="Email" placeholder="Nom de famille du client" />
        <Field name="LastName" label="Nom de famille" placeholder="Nom de famille du client" />
    </form>
    </>
    );
};

export default CustomerPage;