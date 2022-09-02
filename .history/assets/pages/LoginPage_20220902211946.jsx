import React from 'react';

const LoginPage = props => {

return (
    <>
    <h1>Connexion a l'application </h1>
    <form action="">
        <dev className="form-group">
          <label htmlFor="_username">Adress email</label>
          <input type="email" placeholder='Adress email' className="form-control" />
        </dev>
        <dev className="form-group">
          <label htmlFor="_âssword">Mot de passe</label>
          <input type="email" className="form-control" />
        </dev>
    </form>
    </>
);
};

export default LoginPage;