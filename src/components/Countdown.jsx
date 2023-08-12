import React, { useEffect, useState } from 'react';

// const Countdown = ({ seconds }) => {
  const Countdown = (seconds ) => {
  // Define a state variable to store the remaining time
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Use useEffect to update the time every second
  
  useEffect(() => {
    // Check if the time is not zero
     
        // Set a timeout to decrement the time by one after one second
       if(timeLeft <5 ){
        const timeoutId = setTimeout(() => {
          setTimeLeft(timeLeft + 1);
        }, 1000);
      

        // Return a cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      }
     
    }, [timeLeft]); // Depend on the timeLeft state


  // return (
  //   <div className="countdown">
  //     <h1>{timeLeft}</h1>
  //   </div>
  // );
  return timeLeft;
};

export default Countdown;
