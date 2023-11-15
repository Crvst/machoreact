import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './layout/Navigation';
import List from './pages/productList';
import DeleteProduct from './producto/DeleteProduct';
import EditProduct from './producto/EditProduct';                                                                                                                                                                                                                                        
import ShowProduct from './producto/ShowProduct'
import AddProduct from './producto/AddProduct';
import Warranty from './pages/warrantyList';
import AddWarranty from './garantia/AddWarranty';
import EditWarranty from './garantia/EditWarranty';
import DeleteWarranty from './garantia/DeleteWarranty';
import ShowWarranty from './garantia/ShowWarranty';
import AddVehicle from './vehicle/AddVehicle';
import ShowVehicle from './vehicle/ShowVehicle';
import EditVehicle from './vehicle/EditVehicle';
import DeleteVehicle from './vehicle/DeleteVehicle';
import VehicleList from './pages/vehicleList';
import AddClient from './client/AddClient';
import ShowClient from './client/ShowClient';
import EditClient from './client/EditClient';
import DeleteClient from './client/DeleteClient';
import ClientList from './pages/clientList';


function App() {
  return (
    <div className="App">

      <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/ShowProduct" element={<ShowProduct/>}/>
        <Route exact path="/" element={<List/>}/>
        <Route exact path="/AddProduct" element={<AddProduct/>}/>
        <Route exact path="/DeleteProduct" element={<DeleteProduct/>}/>
        <Route exact path="/EditProduct" element={<EditProduct/>}/>
        <Route exact path="/Warranty" element={<Warranty/>}/>
        <Route exact path="/AddWarranty" element={<AddWarranty/>}/>
        <Route exact path="/EditWarranty" element={<EditWarranty/>}/>
        <Route exact path="/DeleteWarranty" element={<DeleteWarranty/>}/>
        <Route exact path="/ShowWarranty" element={<ShowWarranty/>}/>
        <Route exact path="/AddVehicle" element={<AddVehicle/>}/>
        <Route exact path="/ShowVehicle" element={<ShowVehicle/>}/>
        <Route exact path="/EditVehicle" element={<EditVehicle/>}/>
        <Route exact path="/DeleteVehicle" element={<DeleteVehicle/>}/>
        <Route exact path="/Vehicle" element={<VehicleList/>}/>
        <Route exact path="/AddClient" element={<AddClient/>}/>
        <Route exact path="/ShowClient" element={<ShowClient/>}/>
        <Route exact path="/EditClient" element={<EditClient/>}/>
        <Route exact path="/DeleteClient" element={<DeleteClient/>}/>
        <Route exact path="/Client" element={<ClientList/>}/>
        


        
      </Routes>

      </Router>
    </div>
  );
}

export default App;