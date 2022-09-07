import React, {useState} from 'react';

const RegisterPage = props =>{

    const [user,setUser] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
    });
    const [error,setErrors] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
    });

    return(
        <>
        <h1>Insription</h1>
        
        </>
    );
};
export default RegisterPage;