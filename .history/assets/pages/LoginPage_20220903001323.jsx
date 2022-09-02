import React, { useState }from 'react';

const LoginPage = props => {
  const [credentials, setCredentials] = useState({
    usename: "",
    password: ""
  });

  const handleChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setCredentials({ ...credentials, [name]: value }); 
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(credentials);
  };

return (
    <>
    <h1>Connexion a l'application </h1>
    <form onSubmit={handleSubmit}>
        <dev className="form-group">
          <label htmlFor="username">Adress email</label>
          <input value={credentials.username} onChange={handleChange} type="email" placeholder='Adress email' name="username" id="username" className="form-control" />
        </dev>
        <dev className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input value={credentials.password} onChange={handleChange} type="password" placeholder='Mot de passe' name="password" id="password" className="form-control" />
        </dev>
        <div className="form-group"><button type="submit" className="btn btn-success">je me connecte</button></div>
    </form>
    </>
);
};
 
export default LoginPage;