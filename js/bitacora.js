window.onload = function () {
    
};

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
    formulario.titulo.value = '';
    formulario.contenido.value = '';
});

db.collection('pendientes').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            muestraRegistros(change.doc);
        }
        /* else if(change.type=='removed'){
                   console.log(change.doc.id);
                   let valorid = document.getElementById(change.doc.id);
                   productoslista.removeChild(valorid);
               } */
    });
});

function muestraRegistros(doc) {
    console.log("muestra registros");
    var registro = new Registro(doc.id, doc.data().titulo, doc.data().contenido, doc.data().check1, doc.data().check2, doc.data().check3);

    console.log(registro.check1);

    $(".card2:first").hide();

    var cards2 = $(".card2:first").clone()
    $(cards2).find(".card-title").html(registro.titulo);
    $(cards2).find(".card-text").html(registro.contenido);
    $(cards2).find("#item1").html(registro.check1);
    $(cards2).find("#item2").html(registro.check2);
    $(cards2).find("#item3").html(registro.check3);
    $(cards2).show()
    $(cards2).appendTo($(".row"))

}