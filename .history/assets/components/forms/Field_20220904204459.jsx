import React from 'react';

const Field = (name, value, label, onChange, placeholder, error="", type="text") => 
     ( <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className={"form-control" + (error && " is-invalid")} />
    {error && <p className="invalid-feedback">{error}</p>}
  </div>);

export default Field;