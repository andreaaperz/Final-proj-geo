window.onload = function () {
    auth.onAuthStateChanged( user =>{
        if (user){
            $('#no-bitacora').hide();
            $('#componentes').load("pages/bitacora.html");
        } else {
            window.location="index.html";
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
    $('#componentes').hide(); 
    $('#no-bitacora').show();
    $('#no-bitacora').load("pages/mapas.html");
});

$('.navbar').on("click", "#loadTarjetas", function (e) {
    e.preventDefault();
    $('#componentes').hide(); 
    $('#no-bitacora').show();
    $('#no-bitacora').load("pages/cards.html");
    
});

$('.navbar').on("click", "#loadBitacora", function (e) {
    e.preventDefault();
    $('#no-bitacora').load("pages/mapas.html #empty");
    $('#no-bitacora').hide();
    $('#componentes').show(); 

});