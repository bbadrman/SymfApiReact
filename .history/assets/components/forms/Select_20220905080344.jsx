import React from 'react';

const Select = ({name, value, error, label, onChange}) => {
    return (
    <div className="form-group">
    <label htmlFor="{name}">{label}</label>
    <select name="{name}" id="{name}" className="from-control">
        <option value="1">Badr BECHTIOUI</option>
        <option value="2">YAssine ECHARAFI</option>
    </select>
    <p className="invalid-feedback">erreur</p>
</div>);
}

export default Select;