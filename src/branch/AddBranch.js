import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function AddBranches() {
  let navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();
    // Realiza la solicitud POST a la API utilizando axios
    await axios.post('https://localhost:7070/api/Branches', branch);
    navigate('/Branch');
  };

  return (
    <div>
      <link rel="stylesheet" href="/globalForm.css"></link>
    <div className='container'>
      <h2 className='heading'>Registrar Sucursal</h2>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label className='form-label'>Nombre</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter branch name'
            name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Dirección</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter branch address'
            name='address'
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Teléfono</label>
          <input
            type='tel'
            className='form-control'
            placeholder='Ingresa el número de teléfono'
            name='phone'
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email address'
            name='email'
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className='form-group'>
          <label className='form-label'>Horario</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter branch hours'
            name='hours'
            value={hours}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button className='submit-button' type='submit'>Registrar</button>
      </form>
    </div>
    </div>
  );
}
