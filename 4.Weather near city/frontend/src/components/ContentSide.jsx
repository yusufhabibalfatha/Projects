import { useEffect, useState } from "react"
import WeatherSVG from "./WeatherSVG"
import { convertDistanceAndCompass } from "../Utility"

const ContentSide = ({ lat, lon, side, setIsLoading }) => {
    const [location, setLocation] = useState()
    const [current, setCurrent] = useState()
    const [distance, setDistance] = useState()
    
    let position = side=='left' ? 2 : 3

    useEffect(() => {
        const key = '04099e38a7msh82c1ed5da644150p16653djsne44c569195a1';
        const hostAPI = 'geocodeapi.p.rapidapi.com';
        const url = `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${lat}&longitude=${lon}&range=0`;
        
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': hostAPI
            }
        })
            .then(res => res.json())
            .then(data => {
                setDistance(convertDistanceAndCompass(data[position]))

                const key = '8e537e7385aa49e58a875612231306'
                const keyword = `${data[position].Latitude},${data[position].Longitude}`
                const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${keyword}&aqi=no`

                fetch(url)
                    .then(res => res.json())
                    .catch(err => {
                        console.log(err)
                    })
                    .then(data => {
                        setLocation(data.location)
                        setCurrent(data.current)
                        setTimeout(() => {
                            setIsLoading(true)
                        }, 2000);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })

    }, [lat])

    return (
        <div className="left-content">
            {location && (
                <>
                    {distance && (
                        <div className="near-you">
                            <p>{ distance.distance } km</p>
                            <p>{ distance.compass }</p>
                        </div>
                    )}
                    <h3>{location.name}</h3>
                    <div className="region">
                        <p>{location.region}, {location.country}</p>
                    </div>
                    <WeatherSVG code={current.condition.code} name={location.name + 'weather'} />
                    <div className="weather">
                        <p>{current.condition.text}</p>
                        <h5>{current.temp_c}° C</h5>
                        <h5>{current.temp_f}° F</h5>
                    </div>
                </>
            )}
        </div>
    );
}
 
export default ContentSide;