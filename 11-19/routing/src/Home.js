import React from 'react';

const Home = (props) => {


    return (
        <div>
            Home!!🗽 <button onClick={() => props.history.push("/about")}>About</button>
        </div>
    );
};

export default Home;