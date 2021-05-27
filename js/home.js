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