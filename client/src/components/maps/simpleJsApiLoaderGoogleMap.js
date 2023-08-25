import React from "react"
import { Loader } from "@googlemaps/js-api-loader"

const SimpleJsApiLoaderGoogleMap = ({ venueQuery }) => {

    const loader = new Loader({
        apiKey: "AIzaSyA6SY1yhK5BJmofDNuC09DSOSb1I_2YfSg",
        version: 'weekly',
        libraries: ["places"]
    });

    loader.load().then(() => {
        const massachusetts = { lat: 37.0902, lng: 95.7129 };

        const map = new google.maps.Map(document.getElementById("map"), {
            center: massachusetts,
            zoom: 16,
        });

        // 1. Single marker
        new google.maps.Marker({
            position: massachusetts,
            map: map
        })


        // 2. Multiple markers based on request query

        const request = {
            query: venueQuery,
            location: massachusetts,
            radius: "500"
        };

        const service = new google.maps.places.PlacesService(map);
        service.textSearch(request, function (results, status) {
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
        <>
            <h1>GET THERE.</h1>
            <div id="map" style={{ width: 420, height: 420 }}></div>
        </>
    )
}

export default SimpleJsApiLoaderGoogleMap