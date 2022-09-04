import React, { useState } from 'react';
import AuthAPI from '../services/authAPI';

const LoginPage = ({ history}) => {
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
      onLogin(true);
      history.replace("/customers");

    } catch (error) {
      setError("Aucun compte ne posséde cet compte ou alors les infomrations ne correspondant pas!");
    }
  };

  return (
    <>
      <h1>Connexion à l'application </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Adress email</label>
          <input
            value={credentials.username}
            onChange={handleChange}
            type="email"
            placeholder="Adress email"
            name="username"
            id="username"
            className={"form-control" + (error && " is-invalid")} />
          {error && <p className="invalid-feedback">{error}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input value={credentials.password}
            onChange={handleChange}
            type="password"
            placeholder="Mot de passe"
            name="password" id="password"
            className="form-control" />
        </div>
        <div className="form-group"><button type="submit" className="btn btn-success">je me connecte</button></div>
      </form>
    </>
  );
};

export default LoginPage;