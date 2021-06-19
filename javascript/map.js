function initMap() {
    // The location of Uluru
    const uluru = { lat: 28.632370, lng: 77.282166 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    new google.maps.Marker({
        position: uluru,
        map,
        title: "The Cakery",
    });
}