import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';
import axios from 'axios';

const CustomerPage = props => {

    const [customer, setCustomer] = useState({
        lastName: "",
        firstName: "",
        email: "",
        company: ""
    });

    const [errors, setErrors] = useState({
        lastName: "Le nom est obligatoire",
        firstName: "",
        email: "",
        company: ""
    });

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:89/api/customers", customer);
            setErrors({});
            console.log(response.data);
        } catch (error) {
            if (error.response.data.violations) {   
                const apiErrors = {};
                error.response.data.violations.forEach(violation => {
                    apiErrors[violation.proprtyPath] = violation.message;
                });
            
            setErrors(apiErrors);
        }
    }
};

return (
    <>
        <h1>Création d'un client</h1>
        <form onSubmit={handleSubmit}>
            <Field name="lastName" label="Nom de famille" placeholder="Nom de famille du client" value={customer.lastName} onChange={handleChange} errors={errors.lastName} />
            <Field name="firstName" label="Prénom" placeholder="Prénom du client" value={customer.firstName} onChange={handleChange} error={errors.firstName} />
            <Field name="email" label="Email" placeholder="Adress email du client" type="email" value={customer.email} onChange={handleChange} error={errors.email} />
            <Field name="company" label="Entreprise" placeholder="Entreprise du client" value={customer.company} onChange={handleChange} error={errors.company} />

            <div className="form-group">
                <button type="submit" className="btn btn-success">Enregistrer</button>
                <Link to="/customers" className='btn btn-link'>Retour à la liste</Link>

            </div>
        </form>
    </>
);
};

export default CustomerPage;