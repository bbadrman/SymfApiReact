import React, { useEffect, useState }from 'react';

const LoginPage = props => {
  const [credentials, setCredentials] = useState({
    usename: 'login',
    password: 'password',
  })

return (
    <>
    <h1>Connexion a l'application </h1>
    <form action="">
        <dev className="form-group">
          <label htmlFor="username">Adress email</label>
          <input type="email" placeholder='Adress email' name="username" id="username" className="form-control" />
        </dev>
        <dev className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" placeholder='Mot de passe' name="password" id="password" className="form-control" />
        </dev>
        <div className="form-group"><button type="submit" className="btn btn-success">je me connecte</button></div>
    </form>
    </>
);
};
 
export default LoginPage;