import React, { useState, useEffect } from 'react';
import Axios from 'axios'
//https://rickandmortyapi.com/api/character
const RickMorty = (props) => {

    let [characters, setCharacters] = useState([])

    useEffect(() => {
        //will run just once on mount
        Axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                //console.log(res.data.results)
                setCharacters(res.data.results)
            })

    }, [])


    const showCharacters = () => {
        return characters.map(eachCharacter => {
            return <li>{eachCharacter.name}</li>
        })

    }


    return (
        <div>
            <h1>Rick & Morty</h1>

            {showCharacters()}
        </div>
    );
};

export default RickMorty;