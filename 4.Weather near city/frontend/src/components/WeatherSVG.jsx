import thunderSVG from './../asset/thunder.svg'
import cloudySVG from './../asset/cloudy.svg'
import daySVG from './../asset/day.svg'
import rainy1SVG from './../asset/rainy-1.svg'
import rainy2SVG from './../asset/rainy-2.svg'
import rainy3SVG from './../asset/rainy-3.svg'
import snowy1SVG from './../asset/snowy-1.svg'
import snowy2SVG from './../asset/snowy-2.svg'
import snowy3SVG from './../asset/snowy-3.svg'

const WeatherSVG = ({ code, name }) => {
    let source
    const sunny = 1000;
    const thunder = [1087, 1273, 1276, 1279, 1282];
    const cloudy = [1003, 1006, 1135, 1147, 1009, 1030];
    const rain = [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246];
    const snow = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1168, 1171, 1237];
    const rainBad = [1072, 1150, 1153];
    const snowBad = [1117, 1204, 1207];
    const rainEasy = [1069, 1249, 1252];
    const snowEasy = [1261, 1264];
    
    // if( thunder.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/thunder.svg'
    // if( cloudy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/cloudy.svg'
    // if( code == sunny ) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/day.svg'
    // if( rainEasy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/rainy-1.svg'
    // if( rain.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/rainy-2.svg'
    // if( rainBad.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/rainy-3.svg'
    // if( snowEasy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/snowy-1.svg'
    // if( snow.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/snowy-2.svg'
    // if( snowBad.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Weather-App/main/code%20(Vanilla%20js)/rsc/animated/snowy-3.svg'
    if( thunder.includes(code)) source = thunderSVG
    if( cloudy.includes(code)) source = cloudySVG
    if( code == sunny ) source = daySVG
    if( rainEasy.includes(code)) source = rainy1SVG
    if( rain.includes(code)) source = rainy2SVG
    if( rainBad.includes(code)) source = rainy3SVG
    if( snowEasy.includes(code)) source = snowy1SVG
    if( snow.includes(code)) source = snowy2SVG
    if( snowBad.includes(code)) source = snowy3SVG

    return (
        <img src={source} alt={name} />
    );
}
 
export default WeatherSVG;