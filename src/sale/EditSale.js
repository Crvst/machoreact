import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function EditSale() {
  let navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');


  const [sale, setSale] = useState({
    code: '',
    date: '',
    total: '',
    discount: '',
    employeeId: '',
    clientId: '',
    productId:'',
  });

  const [products, setProducts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [clients, setClients] = useState([]);
  const [productsL, setProductsL] = useState([]);
  const salep = [];

  // Estado para almacenar productos seleccionados
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const handleSeleccionProducto = (id) => {
    const productoYaSeleccionado = productosSeleccionados.includes(id);
    if (productoYaSeleccionado) {
      setProductosSeleccionados(
        productosSeleccionados.filter((productoId) => productoId !== id)
      );
    } else {
      setProductosSeleccionados([...productosSeleccionados, id]);
    }
  };

  const { code, date, total, discount, employeeId, clientId, productId } = sale;

  const onInputChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadSale();
    loadProducts();
    loadEmployees();
    loadClients();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const saleData = {
      code: parseInt(code),
      date: date,
      total: parseFloat(total),
      discount: parseFloat(discount),
      employeeId: parseInt(employeeId),
      clientId: parseInt(clientId),
      productId: parseInt(productId),
    };

    await axios.put(`https://localhost:7070/api/Sales/${id}`, saleData);

    // Recorrer los productos seleccionados y actualizar la tabla de SaleProducts
    for (const productId of productosSeleccionados) {
      const saleProductData = {
        saleId: id,
        productId: productId,
      };

      await axios.post(
        'https://localhost:7070/api/SaleProducts',
        saleProductData
      );
    }

    navigate('/Sales');
    Swal.fire('Venta Actualizada!', 'La venta se actualizó con éxito!', 'success');
  };

  const loadSale = async () => {
    const result = await axios.get(`https://localhost:7070/api/Sales/${id}`);
    setSale(result.data);
  };

  const loadProducts = async () => {
    try {
      // Obtener información de los productos asociados a la venta
      const productsResult = await axios.get(`https://localhost:7070/api/SaleProducts/${id}/products`);
      setProductsL(productsResult.data);
      const response = await axios.get('https://localhost:7070/api/Products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

  const loadEmployees = async () => {
    try {
      const response = await axios.get('https://localhost:7070/api/Employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error al cargar los empleados:', error);
    }
  };

  const loadClients = async () => {
    try {
      const response = await axios.get('https://localhost:7070/api/Clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error al cargar los clientes:', error);
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="/sale.css"></link>
      <div className="container">
        <p>.</p>
        <h2 className="heading">Editar Venta</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="form-label">Código</label>
            <input
              type={'number'}
              className="form-control"
              placeholder="Ingresa el código"
              name="code"
              value={code}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Fecha</label>
            <input
              type={'date'}
              className="form-control"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Total</label>
            <input
              type={'number'}
              className="form-control"
              placeholder="Ingresa el total"
              name="total"
              value={total}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Descuento</label>
            <input
              type={'number'}
              className="form-control"
              placeholder="Ingresa el descuento"
              name="discount"
              value={discount}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Empleado</label>
            <select
              className="form-control"
              name="employeeId"
              value={employeeId}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">Selecciona un empleado</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Cliente</label>
            <select
              className="form-control"
              name="clientId"
              value={clientId}
              onChange={(e) => onInputChange(e)}
            >
              <option value="">Selecciona un cliente</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <div className="view-row">
          <label className="view-label">Productos:</label>
          <div className='view-container'>
          <ul>
            {productsL.map((product) => (
              <li key={product.id}>{product.name} Precio {product.price}</li>
            ))}
          </ul>
          </div>
        </div>
          <div className="form-group">
            <label className="form-label">Productos</label>
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre del Producto</th>
                  <th>Seleccione el producto</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => handleSeleccionProducto(product.id)}
                        checked={productosSeleccionados.includes(product.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Productos seleccionados: {productosSeleccionados.join(', ')}</p>
          </div>

          <button className="submit-button" type="submit">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
