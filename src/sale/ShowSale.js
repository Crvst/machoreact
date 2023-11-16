import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ShowSale() {
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  useEffect(() => {
    const loadSale = async () => {
      try {
        const saleResult = await axios.get(`https://localhost:7070/api/Sales/${id}`);
        setSale(saleResult.data);

        // Obtén los productos asociados a la venta
        const productsResult = await axios.get(`https://localhost:7070/api/SaleProducts/${id}/products`);
        setProducts(productsResult.data);
      } catch (error) {
        console.error('Error al cargar la venta:', error);
      }
    };

    loadSale();
  }, [id]);

  return (
    <div>
      <link rel="stylesheet" href="/globalView.css"></link>
      <div className="view-container">
        <div className="view-row">
          <label className="view-label">Código:</label>
          <label className="view-value">{sale.code}</label>
        </div>
        <div className="view-row">
          <label className="view-label">Fecha:</label>
          <label className="view-value">{sale.date}</label>
        </div>
        <div className="view-row">
          <label className="view-label">Total:</label>
          <label className="view-value">{sale.total}</label>
        </div>
        <div className="view-row">
          <label className="view-label">Descuento:</label>
          <label className="view-value">{sale.discount}</label>
        </div>
        <div className="view-row">
          <label className="view-label">ID del Empleado:</label>
          <label className="view-value">{sale.employeeId}</label>
        </div>
        <div className="view-row">
          <label className="view-label">ID del Cliente:</label>
          <label className="view-value">{sale.clientId}</label>
        </div>
        <div className="view-row">
          <label className="view-label">Productos:</label>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
