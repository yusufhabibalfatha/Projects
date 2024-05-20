
export const convertDistanceAndCompass = (data) => {
    let distance = Math.ceil( data.Distance / 1000 );
    let direction = data.CompassDirection;

    let directionLongWord = "";
    let directionDisplayIn;
    let compass

    const splitDirectionText = direction.split("");
    splitDirectionText.forEach(e => {
        if(e=='N') directionLongWord += 'North ';
        if(e=='W') directionLongWord += 'West ';
        if(e=='S') directionLongWord += 'South ';
        if(e=='E') directionLongWord += 'East ';
    });

    if( splitDirectionText.length == 3 ){
        const indexOfSpace = directionLongWord.indexOf(" ");
        directionDisplayIn = directionLongWord.slice(0, indexOfSpace) + "," + directionLongWord.slice(indexOfSpace)
        compass = directionDisplayIn 
        
        return { compass, distance }
    }else{
        compass = directionLongWord 
        return { compass, distance }
    }
}