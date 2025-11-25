function initMap() {
    const mapCenter = {lat: 22.3321, lng: 114.1903};

    const map = google.maps.Map(document.getElementById("map")), {
        center: mapCenter,
        room: 14,
    });

    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: "An interesting relic of the past"
    });

}