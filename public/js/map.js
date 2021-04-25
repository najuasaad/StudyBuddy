function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 44.9778, lng: -93.2650 },
  });
  const geocoder = new google.maps.Geocoder();
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);

  });
  document.getElementById("submitSession").addEventListener("click", () => {
    geocodeAddressSession(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  const addresses = [];
  var locationapi = document.querySelectorAll('span');
  var btnsArr = Array.prototype.slice.call(locationapi);
  for (var i = 0; i < btnsArr.length; i++) {
    console.log(btnsArr[i].textContent);
    addresses.push(btnsArr[i].textContent);
  }
  //clearMarkers();
  for (var i = 0; i < addresses.length; i++) {
    console.log(addresses[i]);
    geocoder.geocode({ address: addresses[i] }, (results, status) => {
      if (status === "OK") {
        //resultsMap.setCenter(results[].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        console.log(status + addresses[i]);
      }
    });
  }

} function geocodeAddressSession(geocoder, resultsMap) {
  const addresses = [];
  var locationapi = document.querySelectorAll('p');
  var btnsArr = Array.prototype.slice.call(locationapi);
  for (var i = 0; i < btnsArr.length; i++) {
    console.log(btnsArr[i].textContent);
    addresses.push(btnsArr[i].textContent);
  }
  //clearMarkers();
  for (var i = 0; i < addresses.length; i++) {
    console.log(addresses[i]);
    geocoder.geocode({ address: addresses[i] }, (results, status) => {
      if (status === "OK") {
        //resultsMap.setCenter(results[].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          },
        });
      } else {
        console.log(status + addresses[i]);
      }
    });
  }

}