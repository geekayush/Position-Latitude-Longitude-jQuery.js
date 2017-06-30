    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            $("#data").html("<p>Latitude: " + lat.toFixed(4) + "&deg;<br>Longitude: " + lon.toFixed(4) + "&deg; </p>");
        });
    }
