const formulario = document.querySelector("#forma");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formulario.check1.value);

    var check1 = false;
    var check2 = false;
    var check3 = false;

    if ($("#check1").is(':checked')) {
        check1 = true;
    } else {
        check1 = false;
    }

    if ($("#check2").is(':checked')) {
        check2 = true;
    } else {
        check2 = false;
    }

    if ($("#check3").is(':checked')) {
        check3 = true;
    } else {
        check3 = false;
    }

    var registro = new Registro(null, formulario.titulo.value, formulario.contenido.value, check1, check2, check3);
    registro.agregar();
    formulario.titulo.value ='';
    formulario.contenido.value ='';
});