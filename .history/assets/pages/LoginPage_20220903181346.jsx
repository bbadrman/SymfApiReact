import React, { useState } from 'react';
import axios from 'axios';
import CustomersAPI from '../services

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
     const token = await axios
     .post("htpp://localhost:89/api/login_check", credentials)
      .then(response => response.data.token);

      setError(""); 

      //Je stocke le tocken dans localstorage

      window.localStorage.setItem("authToken", token);
      // On prévient Axios qu'on a maintenanat un header par defaut sur toutes les futures requetes http
      axios.defaults.headers["Authorisation"] = "Bearer " + token;

    }catch (error) {
    setError("Aucun compte ne posséde cet compte ou alors les infomrations ne correspondant pas!");
  }
    console.log(credentials);
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