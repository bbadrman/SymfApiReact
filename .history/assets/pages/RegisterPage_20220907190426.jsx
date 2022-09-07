import React, {useState} from 'react';

const RegisterPage = props =>{

    const [user,setUser] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [errors,setErrors] = useState({
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    return(
        <>
        <h1>Insription</h1>
        
        </>
    );
};
export default RegisterPage;