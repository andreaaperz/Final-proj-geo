$("#col-tarjeta:first").hide();

fetch('datos.json')
    .then(function (response) {
        response.json().then(function (datos) {
            datos.forEach(item => {
                var cards = $("#col-tarjeta:first").clone()
                $(cards).find("#imagen").attr("src", "./img/" + item.image);
                $(cards).find(".card-title").html(item.title);
                $(cards).find(".card-text").html(item.body);
                $(cards).show()
                $(cards).appendTo($("#row-cards"))
            });
        });
    });