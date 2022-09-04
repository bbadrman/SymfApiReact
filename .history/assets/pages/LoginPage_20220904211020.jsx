import React, { useState, useContext } from 'react';
import AuthAPI from '../services/authAPI';
import AuthContext from "../contexts/AuthContext";
import Field from '../components/forms/Field';

const LoginPage = ({ history}) => {

  const { setIsAuthenticated} = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    usename: "",
    password: ""
  });

  const [error, setError] = useState("");
 // Gestion des champs
  const handleChange = ({ currentTarget}) => {
    const {value, name} = currentTarget;
   

    setCredentials({ ...credentials, [name]: value });
  };

  // Gestion du submit
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await AuthAPI.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      history.replace("/customers");

    } catch (error) {
      setError("Aucun compte ne posséde cet compte ou alors les infomrations ne correspondant pas!");
    }
  };

  return (
    <>
      <h1>Connexion à l'application </h1>

      <form onSubmit={handleSubmit}>
       <Field 
       label="Adresse email" 
       name="username" 
       value={credentials.username}
       onChange={handleChange} 
       placeholder="Adresse email de connexion" 
       error={error} />

       <Field 
       label="Mot de passe" 
       name="password" 
       value={credentials.password}
       onChange={handleChange} 
       type="password" 
       error="" />

      
        <div className="form-group"><button type="submit" className="btn btn-success">je me connecte</button></div>
      </form>
    </>
  );
};

export default LoginPage;