import cpfValido from "./validar-cpf.js";
import maiorDeIdade from "./validar-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        cpfValido(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        maiorDeIdade(campo);
    }
}