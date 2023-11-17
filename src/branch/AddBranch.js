import axios from 'axios';
import React, { useState } from 'react';
import './AddProduct.css';

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
    navigate('/');
  };

  return (
    <div className='container'>
      <h2 className='heading'>Register Branch</h2>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label className='form-label'>Name</label>
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
          <label className='form-label'>Address</label>
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
          <label className='form-label'>Phone</label>
          <input
            type='tel'
            className='form-control'
            placeholder='Enter phone number'
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
          <label className='form-label'>Hours</label>
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
  );
}
