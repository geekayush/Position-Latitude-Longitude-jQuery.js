    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $("#data").html("<p>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude) + "</p>";
        });
    }
