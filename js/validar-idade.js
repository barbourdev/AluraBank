export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    
    validarIdade(dataNascimento);

    if (validarIdade(dataNascimento)) {
        console.log('pessoa maior de idade');
    } else {
        console.log('pessoa menor de idade');
    }
}

function validarIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}