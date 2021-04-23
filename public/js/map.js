
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 5,
          center: { lat: 44.9778, lng: -93.2650 },
        });
        const geocoder = new google.maps.Geocoder();
        document.getElementById("submit").addEventListener("click", () => {
          geocodeAddress(geocoder, map);
        });
      }
  
      function geocodeAddress(geocoder, resultsMap) {
  
        //Test Addresses for proof of concept
        const addresses = ["Minneapolis, MN", "Anoka, MN", "Stillwater, MN", "Hudson, WI", "Savage, MN", "New Hope, MN"];
  
        for (var i = 0; i < addresses.length; i++) {
  
          console.log(addresses[i]);
          geocoder.geocode({ address: addresses[i] }, (results, status) => {
            if (status === "OK") {
              resultsMap.setCenter(results[0].geometry.location);
              new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
              });
            } else {
              alert(
                "Geocode was not successful for the following reason: " + status
              );
            }
          });
        }
  
      }