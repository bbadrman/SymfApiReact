import React from 'react';

const Select = (props) => {
    return (<div className="form-group">
    <label htmlFor="customer">Client</label>
    <select name="customer" id="customer" className="from-control">
        <option value="1">Badr BECHTIOUI</option>
        <option value="2">YAssine ECHARAFI</option>
    </select>
    <p className="invalid-feedback">erreur</p>
</div>);
}

export default Select;