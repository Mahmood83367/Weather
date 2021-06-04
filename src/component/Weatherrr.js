import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React from 'react'


const Weatherrr = (props) => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'f7d454f5834522dcb92bcf5d38a1db14',
        lat: `${props.lat}`, //lat
        lon: `${props.long}`, //lon
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel={props.cityName} // town
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }
            }
            showForecast
        />
    );
};
export default Weatherrr
