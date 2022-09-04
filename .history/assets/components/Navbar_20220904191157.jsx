import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthAPI from '../services/authAPI';
import AuthContext from "../contexts/AuthContext";

const Navbar = ({ history}) => {
 const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
     AuthAPI.logout();
     setIsAuthenticated(false);
     history.push("/login");
  }
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink className="navbar-brand" href="#">SyApRc</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav me-auto">
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">Clients</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/invoices">Factures</NavLink>
          </li>
        </ul>
       <ul className="navbar-nav ml-auto">
        {(!isAuthenticated && (<>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link"> 
               Incsription
            </NavLink>
        </li> 
        <li className="nav-item">
            <NavLink to="/login" className="btn btn-success">
                Connexion !
            </NavLink>
        </li>
        </>
        )) || (
       
        <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger">
                Déconnexion
            </button>
        </li>
        )}
       </ul>
      </div>
    </div>
  </nav>);
}

export default Navbar;