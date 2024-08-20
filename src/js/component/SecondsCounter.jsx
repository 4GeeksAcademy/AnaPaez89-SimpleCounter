import React from 'react';

const SecondsCounter = ({ seconds }) => {
    const digitSix = Math.floor(seconds / 100000) % 10;
    const digitFive = Math.floor(seconds / 10000) % 10;
    const digitFour = Math.floor(seconds / 1000) % 10;
    const digitThree = Math.floor(seconds / 100) % 10;
    const digitTwo = Math.floor(seconds / 10) % 10;
    const digitOne = seconds % 10;

    return (
        <div className="seconds-counter">
            <div className="clockIcon"> 
                <i className="far fa-clock"></i>
            </div>
            <div className="digit">{digitSix}</div>
            <div className="digit">{digitFive}</div>
            <div className="digit">{digitFour}</div>
            <div className="digit">{digitThree}</div>
            <div className="digit">{digitTwo}</div>
            <div className="digit">{digitOne}</div>
        </div>
    );
};

export default SecondsCounter;