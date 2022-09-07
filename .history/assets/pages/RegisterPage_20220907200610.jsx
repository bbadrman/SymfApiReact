import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/forms/Field';

const RegisterPage = ({history})  =>{

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
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async event => {
            event.preventDefault();
            const apiErrors = {...errors};
            if (user.password !== user.passwordConfirm){
                apiErrors.passwordConfirmation

            }

            try{
               const response = await axios.post("http://localhost:89/api/users", user);
               //todo: flass success 
               setErrors({});
               history.push('/login');
            }catch(error) {
                console.log(error.response);
                const {violations} = error.response.data;

                if(violations){
                  
                    violations.forEach(violation =>{
                        apiErrors[violation.propertyPat] = violation.message;
                    });
                    setErrors(apiErrors);
                }
            }
    }

    return(
        <>
        <h1>Insription</h1>
        <form onSubmit={handleSubmit}>
         <Field name="firstName" 
                label="Prénom" 
                placeholder="Votre Prénom" 
                error={errors.firstName} 
                value={user.firstName} 
                onChange={handleChange} />
         <Field name="lastName" label="Nom" placeholder="Votre Nom de famille" error={errors.lastName} value={user.lastName} onChange={handleChange} />
         <Field name="email" label="Adresse email" type="email" placeholder="Votre email" error={errors.email} value={user.email} onChange={handleChange} />
         <Field name="password" label="mot de passe" type="password" placeholder="Votre mot de passe" error={errors.password} value={user.password} onChange={handleChange} />
         <Field name="passwordConfirm" label="mot de passe" type="password" placeholder="Confermer votre mot de passe" error={errors.passwordConfirm} value={user.firstName} onChange={handleChange} />

         <div className="form-group"><button type="submit" className="btn btn-success">Confermation</button></div>
        
        <Link to="/login" className="btn btn-lik">j'ai déjà un compte</Link>
        </form>
        </>
    );
};
export default RegisterPage;