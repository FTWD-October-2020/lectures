import React from 'react';

function AddNum(props) {

    return (
        <div className="thisWay">
            *** {props.ourAnimal} {props.randomNum}
        </div>
    );
};

export default AddNum;

//npx create-react-app nameofyourapp