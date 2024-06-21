document.addEventListener("DOMContentLoaded", function () {
    const provinceSelector = document.getElementById("provinceSelector");
    const placeData = document.getElementById("placeData");

    provinceSelector.addEventListener("change", function () {
        const selectedProvince = this.value;
        const placeArticles = placeData.querySelectorAll("article");

        placeArticles.forEach(article => {
            if (article.getAttribute("data-province") === selectedProvince) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });

    provinceSelector.dispatchEvent(new Event("change"));
});

let map;
const locations = {
    "Santa Fe": [
        { lat: -32.2425, lng: -60.4697, name: "Gin Hoffman" },
        { lat: -32.9575, lng: -60.6397, name: "Cerveceria Berlina" },
        { lat: -31.6475, lng: -60.7000, name: "Entre Copas" }
    ],
    "Buenos Aires": [
        { lat: -34.6037, lng: -58.3816, name: "Buenos Aires Shop" }
    ],
    "Cordoba": [
        { lat: -31.4201, lng: -64.1888, name: "Cordoba Drinks" }
    ]
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.6037, lng: -58.3816 },
        zoom: 8
    });

    document.getElementById("provinceSelector").addEventListener("change", function () {
        const selectedProvince = this.value;
        const selectedLocations = locations[selectedProvince];

        const bounds = new google.maps.LatLngBounds();
        selectedLocations.forEach(location => {
            const marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: location.name
            });
            bounds.extend(marker.position);
        });

        map.fitBounds(bounds);
    });

    document.getElementById("provinceSelector").dispatchEvent(new Event("change"));
}
