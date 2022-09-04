import React from 'react';


export default React.createContext({
    isAuthenticated: false,
    setIsAuthenticate: value => {}
});    