import deleteAlert from '../alerts/deleteAlert';

const DeleteEmployee = (id, updateEmployeeList) => {

  const url = `https://localhost:7070/api/Employees/${id}`;
  deleteAlert(url, updateEmployeeList, 'El empleado');
};

export default DeleteEmployee;
