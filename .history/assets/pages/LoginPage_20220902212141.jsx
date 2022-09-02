import React from 'react';

const LoginPage = props => {

return (
    <>
    <h1>Connexion a l'application </h1>
    <form action="">
        <dev className="form-group">
          <label htmlFor="username">Adress email</label>
          <input type="email" placeholder='Adress email' name="username" className="form-control" />
        </dev>
        <dev className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" placeholder='Mot de passe' name="password" id="password" className="form-control" />
        </dev>
    </form>
    </>
);
};

export default LoginPage;