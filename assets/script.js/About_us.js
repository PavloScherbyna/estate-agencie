function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8756712, lng: 14.4423124},
    zoom: 17,
  });
    new google.maps.Marker({
        position: { lat: beach[1], lng: beach[2] },
        map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
    });
  }