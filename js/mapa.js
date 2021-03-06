function iniciaMapa() {

    var styledMapType = new google.maps.StyledMapType(
        [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#80ffff"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d307f8"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9be0e6"
                }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#373737"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff0080"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3c3c3c"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffff3c"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4e4e4e"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#0000ff"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#00ff00"
                }]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#00ff00"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#c0c0c0"
                }]
            }
        ], {
            name: 'Mapa ne??n'
        }
    );

    var propiedades = {
        center: {
            lat: 23.634501,
            lng: -102.552784
        },
        zoom: 5,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'style_map']
        }
    };

    const mapa = document.getElementById("map");
    const map = new google.maps.Map(mapa, propiedades);

    map.mapTypes.set('style_map', styledMapType);
    map.setMapTypeId('style_map');


    //FAIRVEW

    map.setCenter({
        lat: 23.634501,
        lng: -102.552784
    });

    const infoWindowAlta = new google.maps.InfoWindow({
        content: "<h1>ALTA</h1><p>Disponibilidad</p>"
    })
    const infoWindowMedia = new google.maps.InfoWindow({
        content: "<h1>MEDIA</h1><p>Disponibilidad</p>"
    })
    const infoWindowBaja = new google.maps.InfoWindow({
        content: "<h1>BAJA</h1><p>Disponibilidad</p>"
    })

    const marker = new google.maps.Marker({
        position: {
            lat: 23.634501,
            lng: -102.552784
        },
        map,
        title: "M??xico"
    });

    marker.addListener("mouseover", () => {
        infoWindowAlta.open(map, marker);
    });

    //Nuevo Le??n
    const marker1 = new google.maps.Marker({
        position: {
            lat: 25.6714,
            lng: -100.309
        },
        map,
        title: "Nuevo Le??n"
    });

    marker1.addListener("mouseover", () => {
        infoWindowBaja.open(map, marker1);
    });

    //Tabasco
    const marker2 = new google.maps.Marker({
        position: {
            lat: 17.9892,
            lng: -92.9281
        },
        map,
        title: "Tabasco"
    });

    marker2.addListener("mouseover", () => {
        infoWindowBaja.open(map, marker2);
    });

    //Baja California
    const marker3 = new google.maps.Marker({
        position: {
            lat: 32.4982100,
            lng: -116.2809400
        },
        map,
        title: "Baja California"
    });

    marker3.addListener("mouseover", () => {
        infoWindowBaja.open(map, marker3);
    });

    //Tamaulipas
    const marker4 = new google.maps.Marker({
        position: {
            lat: 23.7369,
            lng: -99.1411
        },
        map,
        title: "Tamaulipas"
    });

    marker4.addListener("mouseover", () => {
        infoWindowBaja.open(map, marker4);
    });

    //Chiapas
    const marker5 = new google.maps.Marker({
        position: {
            lat: 16.75,
            lng: -93.1167
        },
        map,
        title: "Chiapas"
    });

    marker5.addListener("mouseover", () => {
        infoWindowMedia.open(map, marker5);
    });

    //Oaxaca
    const marker6 = new google.maps.Marker({
        position: {
            lat: 17.0669,
            lng: -96.7203
        },
        map,
        title: "Oaxaca"
    });

    marker6.addListener("mouseover", () => {
        infoWindowMedia.open(map, marker6);
    });

    //Nayarit
    const marker7 = new google.maps.Marker({
        position: {
            lat: 21.5039,
            lng: -104.895
        },
        map,
        title: "Nayarit"
    });

    marker7.addListener("mouseover", () => {
        infoWindowMedia.open(map, marker7);
    });

    //Aguascalientes
    const marker8 = new google.maps.Marker({
        position: {
            lat: 21.8818,
            lng: -102.291
        },
        map,
        title: "Aguascalientes"
    });

    marker8.addListener("mouseover", () => {
        infoWindowAlta.open(map, marker8);
    });

    //Tlaxcala
    const marker9 = new google.maps.Marker({
        position: {
            lat: 19.3190500,
            lng: -98.1998200
        },
        map,
        title: "Tlaxcala"
    });

    marker9.addListener("mouseover", () => {
        infoWindowAlta.open(map, marker9);
    });

    //Veracruz
    const marker10 = new google.maps.Marker({
        position: {
            lat: 19.1727,
            lng: -96.1333
        },
        map,
        title: "Veracruz"
    });

    marker10.addListener("mouseover", () => {
        infoWindowMedia.open(map, marker10);
    });
}