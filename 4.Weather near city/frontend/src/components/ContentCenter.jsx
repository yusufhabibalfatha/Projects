import WeatherSVG from "./WeatherSVG";


const ContentCenter = ({ location, current }) => {
    return (
        <div className="content">
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
        </div>
    );
}
 
export default ContentCenter;