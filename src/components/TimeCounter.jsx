import { useEffect, useState, useRef } from 'react';


const TimeCounter = (seconds, isSaving, setIsSaving) => {
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
    // const [time, setTime] = useState(seconds);
    // useEffect(() => {
    //     if (time < 15) {
    //         const timeoutId = setInterval(() => {
    //             setTime(time + 1);
    //             // console.log(time)
    //         }, 1000);
    //         return () => clearInterval(timeoutId);
    //     }

    // }, [time]);



    
    
    
    
    // useEffect(() => {
        //     if (isSaving === true) {
            //         //saving time in goneTime
            //         setGoneTime(time - timeController)
            
            //     } else {
                //         console.log('is saving time')
                //         console.log("time controller is :", timeController)
                
                
                //     //    if(isStop===false){
                    //     //     setTimeController(time)
                    //     //    }else{
                        //     //     setTimeController(time-timeController)
                        //     //    }
                        //     setTimeController(time-timeController)
                        
                        
                        //     }
    // }, [time, isSaving, timeController,isStop])
    
    // console.log(time);
    // console.log("time controller", timeController)
    
    
    // useEffect(() => {
        //     if (isSaving === true) {
            //         //saving time in goneTime
            //         // setGoneTime(goneTime + 1)
            
            
            //         setGoneTime()
            
            //     }
            // }, [goneTime, isSaving])
            
            
            const [goneTime, setGoneTime] = useState(seconds);
            useEffect(() => {
                
                const timeoutId = setInterval(() => {
                    if (isSaving) {
                        setGoneTime(goneTime + 1)
                    }
                }, 1000);
                return () => clearInterval(timeoutId);
                
                
    }, [goneTime, isSaving]);


    
    ////////////////////////////////////////////////////////////////////
    return { goneTime };
};

export default TimeCounter;
