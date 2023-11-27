import Swal from 'sweetalert2';

function formAlert(text) {
  Swal.fire({
    icon: "error",
    title: "Error.",
    text: `${text}`,
  });
}

  export default formAlert;