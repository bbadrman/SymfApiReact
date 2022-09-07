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

    // Gestion du changements des inputs dans le formulaire
    const handleChange = event => {
        setInvoice({
            ...invoice, sentAt: new Date(), chron: Math.floor(Math.random() * 100)
            , [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
            event.preventDefault();
            

    return(
        <>
        <h1>Insription</h1>
        <form onSubmit={handleSubmit}>

        </form>
        </>
    );
};
export default RegisterPage;