import { useEffect, useRef } from "react";
import cloudy3SVG from './../asset/cloudy-day-3.svg'

const Loading = () => {
    const content = useRef()
    useEffect(()=>{
        content.current.firstChild.firstChild.style.transform = 'scale(100%)'
        content.current.lastChild.firstChild.style.fontSize = '1.3em'
        setTimeout(()=>{
            content.current.style.opacity = 0
            content.current.firstChild.firstChild.style.transform = 'scale(0%)'
            content.current.lastChild.firstChild.style.fontSize = '0em'
        }, 2000)
    }, [])
    
    return (
        <div ref={content} className="loading" >
            <div>
                <img src={cloudy3SVG} alt="cloudy-day-svg" />
            </div>
            <div>
                <p>Weather | Degree | Near city</p>
            </div>
        </div>
    );
}
 
export default Loading;