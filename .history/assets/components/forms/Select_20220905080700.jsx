import React from 'react';

const Select = ({name, value, error, label, onChange, children}) => {
    return (
    <div className="form-group">
    <label htmlFor="{name}">{label}</label>
    <select name="{name}" id="{name}" className="from-control">
        {children}
    </select>
    <p className="invalid-feedback">erreur</p>
</div>
);
};

export default Select;