import React from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';

const CustomerPage = props => {

    const [customers, setCustomers] = useState({
       lastName: "Badr",
       firstName: "",
       email: "",
       company: ""
    });

    const handleChange =({ currentTarget}) => {
        const {name, value} = currentTarget;
        setCustomer({...customer, [name]: value});
    };

    return (
    <>
    <h1>Création d'un client</h1>
    <form>
        <Field name="lastName" label="Nom de famille" placeholder="Nom de famille du client" value={customers.lastName} />
        <Field name="firstName" label="Prénom" placeholder="Prénom du client" value={customers.firstName}  />
        <Field name="email" label="Email" placeholder="Adress email du client" type="email" value={customers.email} />
        <Field name="company" label="Entreprise" placeholder="Entreprise du client" value={customers.company} />
   
   <div className="form-group">
    <button type="submit" className="btn btn-success">Enregistrer</button>
    <Link to="/customers" className='btn btn-link'>Retour à la liste</Link>

   </div>
    </form>
    </>
    );
};

export default CustomerPage;