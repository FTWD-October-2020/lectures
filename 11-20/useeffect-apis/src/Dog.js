import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Dog = (props) => {

    let [doggyPic, setDogPic] = useState('')

    console.log(props.match.params)

    useEffect(() => {

        Axios
            .get(`https://dog.ceo/api/breeds/image/random`)
            .then(res => {
                console.log(res.data.message)
                setDogPic(res.data.message)
            })

    }, [])



    return (
        <div className="App">
            <h1>Doggys</h1>
            <img src={doggyPic} />

        </div>
    );
};

export default Dog;