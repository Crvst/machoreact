import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EditBranch() {
  let navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const [branch, setBranch] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    hours: '',
  });

  const { name, address, phone, email, hours } = branch;

  const onInputChange = (e) => {
    setBranch({ ...branch, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBranch();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://localhost:7070/api/Branches/${id}`, branch);
    navigate('/Branch');
  };

  const loadBranch = async () => {
    const result = await axios.get(`https://localhost:7070/api/Branches/${id}`);
    setBranch(result.data);
  };

  return (
    <div>
      <link rel="stylesheet" href="/globalForm.css"></link>
      <div className="container">
        <h2 className="heading">Editar Sucursal</h2>

        <form onSubmit={(e) => onSubmit(e)}>
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
            <label className="form-label">Horario</label>
            <input
              type={'text'}
              className="form-control"
              placeholder="Ingresa el horario"
              name="hours"
              value={hours}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="submit-button" type="submit">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
