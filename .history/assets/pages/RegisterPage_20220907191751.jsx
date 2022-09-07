import React, {useState} from 'react';
import Field from '../components/forms/Field';

const RegisterPage = props =>{

    const [user,setUser] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errors,setErrors] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    // Gestion du changements des inputs dans le formulaire
    const handleChange = event => {
        setInvoice({
            ...invoice, sentAt: new Date(), chron: Math.floor(Math.random() * 100)
            , [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
            event.preventDefault();
            console.log(user);
    }

    return(
        <>
        <h1>Insription</h1>
        <form onSubmit={handleSubmit}>
         <Field name="firstName" label="Prénom" placeholder="Votre Prénom" error={errors.firstName} value={user.firstName} onChange={handleSubmit} />
         <Field name="lastName" label="Nom" placeholder="Votre Nom de famille" error={errors.lastName} value={user.lastName} onChange={handleSubmit} />
         <Field name="email" label="Adresse email" type="email" placeholder="Votre email" error={errors.email} value={user.email} onChange={handleSubmit} />
         <Field name="password" label="mot de passe" placeholder="Votre mot de passe" error={errors.password} value={user.password} onChange={handleSubmit} />
         <Field name="passwordConfirm" label="mot de passe" placeholder="Confermer votre mot de passe" error={errors.passwordConfirm} value={user.firstName} onChange={handleSubmit} />
      
        </form>
        </>
    );
};
export default RegisterPage;