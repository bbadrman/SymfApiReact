import React from 'react';

const Field = (name, value, label, onChange, placeholder, error) => {
    return ( <div className="form-group">
    <label htmlFor="username">Adress email</label>
    <input
      value={credentials.username}
      onChange={handleChange}
      type="email"
      placeholder="Adress email"
      name="username"
      id="username"
      className={"form-control" + (error && " is-invalid")} />
    {error && <p className="invalid-feedback">{error}</p>}
  </div>);
};
export default Field;