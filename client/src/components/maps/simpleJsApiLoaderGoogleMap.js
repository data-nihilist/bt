import React from "react"
import { Loader } from "@googlemaps/js-api-loader"

const SimpleJsApiLoaderGoogleMap = (props) => {

    const loader = new Loader({
        apiKey: "AIzaSyA6SY1yhK5BJmofDNuC09DSOSb1I_2YfSg",
        libraries: ["places"]
    });

    loader.load().then(() => {
        const boston = { lat: 37.0902, lng: 95.7129 };

        const map = new google.maps.Map(document.getElementById("map"), {
            center: boston,
            zoom: 2,
        });

        // 1. Single marker
        new google.maps.Marker({
            position: boston,
            map: map
        })


        // 2. Multiple markers based on request query

        const request = {
            query: "burger king",
            location: boston,
            radius: "500"
        };

        const service = new google.maps.places.PlacesService(map);
        service.textSearch(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                results.forEach((result) => {
                    new google.maps.Marker({
                        position: new google.maps.LatLng(result.geometry.location.lat(), result.geometry.location.lng()),
                        map: map,
                    });
                })

                map.setCenter(results[0].geometry.location);
            }
        })

    })

    return (
        <div>
            <h1>Simply JS API Loader Google Maps</h1>
            <ul>
                <li>Should comment out script in client/public/index.html which declares Google Maps for other maps</li>
                <li>Displaying a single marker for Boston</li>
                <li>Component has logic for displaying multiple markers base on a request query</li>
        </ul>
        <div id="map" style={{width: 500, height:500}}></div>
        </div>
    )
}

export default SimpleJsApiLoaderGoogleMap