import { useEffect } from "react";
import ContentCenter from "./ContentCenter";
import ContentSide from "./ContentSide";

const Main = ({ city, setError, location, current, setCurrent, setLocation, setIsLoading }) => {
    useEffect(() => {
        const  abort = new  AbortController()

        const key = '8e537e7385aa49e58a875612231306';
        const keyword = city;
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${keyword}&aqi=no`;

        fetch(url, {  signal: abort.signal })
            .then(res => {
                if(!res.ok) throw new Error
                setError(false)
                return res.json()
            })
            .catch(error  =>  {
                console.log('catch  1')
                console.log(error)
            })
            .then(data => {
                setLocation(data.location)
                setCurrent(data.current)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [city])

    return (
        <main>
            {location && <ContentSide lat={location.lat} lon={location.lon} side='left' setIsLoading={setIsLoading} />}
            {location && <ContentCenter location={location} current={current}/>}
            {location && <ContentSide lat={location.lat} lon={location.lon} side='right' setIsLoading={setIsLoading} />}
        </main>
    );
}
 
export default Main;