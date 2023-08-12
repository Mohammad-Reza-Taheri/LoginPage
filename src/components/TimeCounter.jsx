import { useEffect, useState, useRef } from 'react';


const TimeCounter = (seconds) => {
    // // Define a state variable to store the remaining time
    // const [time, setTime] = useState(seconds);

    // // Use useEffect to update the time every second
    // useEffect(() => {
    //     if (time < 5) {
    //         const timeoutId = setTimeout(() => {
    //             setTime(time + 1);
    //             console.log(time)
    //         }, 1000);


    //         // Return a cleanup function to clear the timeout
    //         return () => clearTimeout(timeoutId);
    //     }

    // }, [time]); // Depend on the time state



    ////////////////////////////////////////////////////////////////////
    const [time, setTime] = useState(seconds);
    useEffect(() => {
         if (time < 15) {
            const timeoutId = setInterval(() => {
                setTime(time + 1);
                // console.log(time)
            }, 1000);
            return () => clearInterval(timeoutId);
         }
        
    }, [time]);

    // const [time, setTime] = useState(seconds);
    // const increment = useRef(null)
    // const handleStart = () => {
    //     increment.current = setInterval(() => {
    //         const time_2 = time + 1;
    //         setTime(time_2)
    //         console.log("time value is :", time)
    //     }, 1000)


        

    // }

    // const handleStop = () => {
    //     clearInterval(increment.current)
    //     setTime(0)
    //     console.log(time)
    // }







    ////////////////////////////////////////////////////////////////////
    return {time};
};

export default TimeCounter;
