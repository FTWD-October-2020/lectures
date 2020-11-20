import React, { useEffect, useState } from 'react';
import Axios from 'axios'


const Taco = (props) => {
    let [taco, setTaco] = useState({})

    useEffect(() => {

        Axios.get('http://taco-randomizer.herokuapp.com/random/')
            .then(res => {
                console.log(res)
                setTaco(res.data)
            })

    }, [])

    console.log(taco)

    //optional chaining 
    return (
        <div>
            <h1>Taco???</h1>
            <h2>{taco?.base_layer?.name}</h2>

            <p>{taco?.base_layer?.recipe}</p>
        </div>
    );
};

export default Taco;