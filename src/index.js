import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFkYWRhbWFyaW5lIiwiYSI6ImNqeWw0cXNleTA0bHUzaHM4eXZ4eTB2YTMifQ.GhEeiW7qRb71WkyW3P_ZGg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

map.on('load', function () {
    map.addSource('sickPerson', {
        type: 'geojson',
        data: 'http://localhost:8080/virus/locationInfo/directZone?date=2020-01-24',
    });
    map.addLayer(
        {
            'id': 'sickPerson',
            'type': 'fill',
            'source': 'sickPerson',
            'layout': {
                'visibility': 'visible'
            },
            'paint': {
                'fill-color': 'red'
            }
        }
    )
});

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
