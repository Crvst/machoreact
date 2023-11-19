import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditEmployee() {
  let navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const [employee, setEmployee] = useState({
    identification: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { identification, name, address, phone, email, password, 
    confirmPassword,} = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (
      !identification ||
      !name ||
      !address ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "Todos los campos son obligatorios. Por favor, llénelos todos.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (!/^\d{9}$/.test(identification)) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "El cédula debe tener 9 dígitos numéricos.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "El nombre no debe contener números.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (!/^\d{8}$/.test(phone)) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "El teléfono debe tener 8 dígitos numéricos.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "El correo electrónico no tiene un formato válido.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: "Las contraseña no coinciden. Por favor, verifique que sean iguales.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }


    Swal.fire({
      title: "¿Desea guardar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Guardado.", "", "success");
        await axios.put(`https://localhost:7070/api/Employees/${id}`, employee);
        navigate('/Employee'); // Update the route to match your application's routing
      } else if (result.isDenied) {
        Swal.fire("Los cambios no fueron guardados.", "", "info");
        return;
      }
    });
  };

  const loadEmployee = async () => {
    const result = await axios.get(
      `https://localhost:7070/api/Employees/${id}`
    );

    const employeeData = result.data;

    setEmployee({
      ...employeeData,
    });
  };

  return (
    <div>
      <link rel="stylesheet" href="/globalForm.css"></link>
      <div className="container">
        <h1 className="heading">Editar Empleado</h1>

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
          

          <div className="form-group">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type={'password'}
              className="form-control"
              placeholder="Confirma la contraseña"
              name="confirmPassword"
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
