import React, { useState } from 'react'
import Time from './Time'
import Weatherrr from './Weatherrr'
const weather = require('openweather-apis');

function Inputcity() {
    const [cooord, setcooord] = useState({ lati: '51.5085', long: '-0.1257', cityy: 'London' })
    const [city, setcity] = useState('London')
    const submit = () => {
        weather.setLang('en');
        weather.setCity(`${city}`);
        weather.setUnits('metric');
        weather.setAPPID('f7d454f5834522dcb92bcf5d38a1db14');
        weather.getAllWeather(function (err, info) {
            if (err) {
                alert('Input a valid City')
            }
            else {
                setcooord({ lati: info.coord.lat, long: info.coord.lon, cityy: info.name })
            }

        });
    }

    const loctate = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setcooord({ lati: position.coords.latitude, long: position.coords.longitude, cityy: 'Mosul' })
        });

    }
    const cityhandler = (event) => {
        setcity(event.target.value)
    }
    return (
        <div>
            <div>
                <input type='text' value={city} onChange={cityhandler} autoFocus />
                <button onClick={submit}>OK</button>
                <button onClick={loctate}>Loctate My Location</button>
            </div>
            <Time />
            <Weatherrr lat={cooord.lati} long={cooord.long} cityName={cooord.cityy} />
        </div>
    )
}

export default Inputcity