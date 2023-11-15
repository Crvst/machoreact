import deleteAlert from '../alerts/deleteAlert';

const DeleteVehicle = (id, updateVehicleList) => {

  const url = `https://localhost:7070/api/Vehicles/${id}`;
  deleteAlert(url, updateVehicleList);
};

export default DeleteVehicle;
