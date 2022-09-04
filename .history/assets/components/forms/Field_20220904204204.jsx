import React from 'react';

const Field = (name, value, label, onChange, placeholder, error, type) => {
    return ( <div className="form-group">
    <label htmlFor={name}>Adress email</label>
    <input
      value={credentials.username}
      onChange={handleChange}
      type="email"
      placeholder="Adress email"
      name={name}
      id={name}
      className={"form-control" + (error && " is-invalid")} />
    {error && <p className="invalid-feedback">{error}</p>}
  </div>);
};
export default Field;