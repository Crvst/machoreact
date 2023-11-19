import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    identification: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
  });

  const { identification, name, address, phone, email, password } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://localhost:7070/api/Employees', employee);
    navigate('/Employee'); // Update the route to match your application's routing
  };

  return (
    <div>
      <link rel="stylesheet" href="/globalForm.css"></link>
      <div className="container">
        <h1 className="heading">Registrar Empleado</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="form-label">Cédula</label>
            <input
              type={'text'}
              className="form-control"
              placeholder="Ingresa la cédula"
              name="identification"
              value={identification}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              type={'text'}
              className="form-control"
              placeholder="Ingresa el nombre"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Dirección</label>
            <input
              type={'text'}
              className="form-control"
              placeholder="Ingresa la dirección"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Teléfono</label>
            <input
              type={'text'}
              className="form-control"
              placeholder="Ingresa el teléfono"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Correo Electrónico</label>
            <input
              type={'email'}
              className="form-control"
              placeholder="Ingresa el correo electrónico"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type={'password'}
              className="form-control"
              placeholder="Ingresa la contraseña"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="submit-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
