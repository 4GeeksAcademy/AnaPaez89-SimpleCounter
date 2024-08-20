import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => isCountingDown ? Math.max(prevSeconds - 1, 0) : prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isCountingDown]);




    return (
        <div>
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;