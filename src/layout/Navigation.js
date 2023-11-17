import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import './Navigation.css';

const items = () => {
  return [
    {
      link: '/ProductList',
      title: 'Inventario',
    },
    {
      link: '/Warranty',
      title: 'Garantias',
    },
  ];
};

const handleClick = (option) => {
  switch (option) {
    case 'Vehiculos':
      window.location.href = '/Vehicle';
      break;
    case 'Clientes':
      window.location.href = '/Client';
      break;
    case 'Ventas':
      window.location.href = '/Sales';
      break;
    case 'Compras':
      window.location.href = '/Buys';
      break;

      case 'Sucursales':
        window.location.href = '/Branch';
        break;
    
  }
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrolled = scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className="navMenu">
      <div className="company-logo">
        <a className="add-link nav-link" href="/">
          <img src="logoEmpresa.png" alt="Logo de la empresa" />
        </a>
      </div>
      <div>
        <div className="title_wrapper">
          <button
            className="title_activator"
            onClick={() => handleClick('Sucursales')}
          >
            Sucursales
          </button>
        </div>
      </div>
      <div>
        <Dropdown dropdownTitle="Producto" items={items()} />
      </div>
      <div>
        <div className="title_wrapper">
          <button
            className="title_activator"
            onClick={() => handleClick('Vehiculos')}
          >
            Vehículos
          </button>
        </div>
      </div>
      <div>
        <div className="title_wrapper">
          <button
            className="title_activator"
            onClick={() => handleClick('Clientes')}
          >
            Clientes
          </button>
        </div>
      </div>
      <div>
        <div className="title_wrapper">
          <button
            className="title_activator"
            onClick={() => handleClick('Ventas')}
          >
            Ventas
          </button>
        </div>
      </div>
      <div>
        <div className="title_wrapper">
          <button
            className="title_activator"
            onClick={() => handleClick('Compras')}
          >
            Compras
          </button>
        </div>
      </div>
    </nav>
  );
}
