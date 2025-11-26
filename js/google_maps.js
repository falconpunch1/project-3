function initMap() {
    const kowloon_center = { lat: 22.3321, lng: 114.1903};
    const iit_center = { lat: 41.8358, lng: -87.625764};

    const map = new google.maps.Map(document.getElementById("map"), {
        center: kowloon_center,
        zoom: 14,
    });

    const kowloon = new google.maps.Marker({
        position: kowloon_center,
        map: map,
        title: "An interesting relic of the past",
    });

    const techyeah = new google.maps.Marker({
        position: iit_center,
        map: map,
        title: "An institution of all time",
    });

    const emailButton = document.getElementById("button");
    emailButton.addEventListener("click", clicked);

    function clicked() {
        alert("Please reach out to me at dmedina10@hawk.illinoistech.edu for any questions, comments, or concerns you may have.")}

}
