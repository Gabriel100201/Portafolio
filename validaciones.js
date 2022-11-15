export function valida(input) {
  const tipoDeInput = input.dataset.tipo; 
    if (input.validity.valid) {
      input.classList.remove("input-rojo");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.classList.add("input-rojo");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tiposError.forEach((error) => {
    if (input.validity[error]) {
        mensaje = mensajeError[tipoDeInput][error];
    }
  });
  return mensaje;
  }

const mensajeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío"
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido"
  },
  asunto: {
    valueMissing: "Complete con el asunto"
  },
  mensaje: {
    valueMissing: "No puede enviar un mensaje vacío"
  },
}
const tiposError = [
  "valueMissing",
  "typeMismatch"
];
