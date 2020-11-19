import React from 'react';
import countries from './countries.json'

function Country(props) {

    //This is coming from the url
    console.log(props.match.params.name)

    //This is my data 
    console.log(countries)

    //I search my data for what is in the url
    let country = countries.find(eachCountry => {
        return eachCountry.name.common === props.match.params.name
    })

    console.log(country)
    return (
        <div>
            <h1>Country {country.flag}</h1>
        </div>
    );
}

export default Country;