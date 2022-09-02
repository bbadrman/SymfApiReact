import React, { useEffect, useState }from 'react';

const LoginPage = props => {
  const [credentials, setCredentials] = useState({
    usename: '',
    password: '',
  });

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    setCredentials(..credentials, name: value); /

  }

return (
    <>
    <h1>Connexion a l'application </h1>
    <form action="">
        <dev className="form-group">
          <label htmlFor="username">Adress email</label>
          <input value={credentials.usename} onChange={handleChange} type="email" placeholder='Adress email' name="username" id="username" className="form-control" />
        </dev>
        <dev className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input value={credentials.password} type="password" placeholder='Mot de passe' name="password" id="password" className="form-control" />
        </dev>
        <div className="form-group"><button type="submit" className="btn btn-success">je me connecte</button></div>
    </form>
    </>
);
};
 
export default LoginPage;