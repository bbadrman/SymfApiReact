import React, { useState } from 'react';
import axios from 'axios';
import AuthAPI from '../services/authAPI';

const LoginPage = props => {
  const [credentials, setCredentials] = useState({
    usename: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
     await AuthAPI.authenticate(credentials);

    }catch (error) {
    setError("Aucun compte ne posséde cet compte ou alors les infomrations ne correspondant pas!");
  }
  };

  return (
    <>
      <h1>Connexion a l'application </h1>

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
            { error && <p className="invalid-feedback">{error}</p>}
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