import React from "react";
import { useParams } from 'react-router-dom';


const Display = () => {

    const { input, textColor, bgColor } = useParams();


    const styles = {
        color: `${textColor}`,
        backgroundColor: `${bgColor}`,
    }

    console.log(textColor);
    console.log(bgColor);


    return(

        <h1 style={ styles }>{isNaN(input) ? `The word: ${input}` : `The number is: ${input}`}</h1>

    )

}

export default Display;