import React, { useEffect, useState } from 'react'
import GameInput from '../../components/GameInput/GameInput'
import './Game.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Countdown from '../../components/Countdown'
import TimeCounter from '../../components/TimeCounter'

// const UrgeWithPleasureComponent = () => (
//   <CountdownCircleTimer
//     isPlaying
//     duration={7}
//     colors={['#004777', '#F7B801', '#A30000', '#A30000']}
//     colorsTime={[7, 5, 2, 0]}
//   >
//     {({ remainingTime }) => remainingTime}
//   </CountdownCircleTimer>
// )





const Game = () => {

  const { time} = TimeCounter(0);
  const[timeController,setTimeController]=useState(0)
  const[valueSaver,setValueSaver]=useState(false)
  const[goneTime,setGoneTime]=useState(0);
 useEffect(()=>{
  if(valueSaver===false){
    // setTimeController(time)
    setGoneTime(time-timeController)
  }else{
    console.log('value saver is true')
    setTimeController(time)
    console.log("time controller is :",timeController)
    setValueSaver(false)
  }
 },[time,valueSaver,timeController])

  console.log(time);
console.log("time controller",timeController)





  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        <div className="count_down_text">Remaining</div>
        <div className="count_down_time">{remainingTime}</div>
        <div className="count_down_text">seconds</div>
      </div>
    );
  };

  const count = Countdown(0);
  // console.log(count)
  return (
    <div className='main_game_container' >
      {/* <Countdown seconds={3}/> */}
      {count}
      <h1>Gone time is :{goneTime}</h1>

<input type="button" value={"set value saver true"} onClick={()=>setValueSaver(true)}/>







      <GameInput />
      {/* <span className='text-light'>س</span>
        <span className='text-light'>سس</span> */}
      <h1>
        Do faster
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={["#00ff00", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        information
      </p>

      {/* <h1 className={value_2?(value?'white':'red'):'gray'}>ali</h1> */}



    </div>
  )
}

export default Game