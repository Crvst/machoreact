import deleteAlert from '../alerts/deleteAlert';

const DeleteWarranty = (id, updateWarrantyList) => {

  const url = `https://localhost:7070/api/Warranties/${id}`;
  deleteAlert(url, updateWarrantyList);
};

export default DeleteWarranty;
