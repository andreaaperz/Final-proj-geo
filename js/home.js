window.onload = function () {
    auth.onAuthStateChanged( user =>{
        if (user){
            $('#componentes').load("pages/bitacora.html");
        } else {
            window.location="indez.html";
        }
    })
};

const salir = document.getElementById("salir");
salir.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('entró');
    auth.signOut().then(() => {
        alert('Se ha cerrado sesión');
        window.location = "index.html";
    }).catch(err => {
        console.log(err);
    });
});

$('.navbar').on("click", "#loadMapas", function (e) {
    e.preventDefault();
    $('#componentes').load("pages/mapas.html");
});

$('.navbar').on("click", "#loadTarjetas", function (e) {
    e.preventDefault();
    $('#componentes').load("pages/cards.html");
});

$('.navbar').on("click", "#loadBitacora", function (e) {
    e.preventDefault();
    $('#componentes').load("pages/bitacora.html");
});