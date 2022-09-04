import React from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';

const CustomerPage = props => {
    return (
    <>
    <h1>Création d'un client</h1>
    <form>
        <Field name="lastName" label="Nom de famille" placeholder="Nom de famille du client" />
        <Field name="firstName" label="Prénom" placeholder="Prénom du client" />
        <Field name="email" label="Email" placeholder="Adress email du client" type="email" />
        <Field name="company" label="Entreprise" placeholder="Entreprise du client" />
   
   <div className="form-group">
    <button type="submit" className="btn btn-success">Enregistrer</button>
    <Link to="/customers" className='btn btn-link'>Retour à la liste</Link>

   </div>
    </form>
    </>
    );
};

export default CustomerPage;