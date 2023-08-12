// import React, { useEffect, useRef, useState } from 'react'
// import './GameInput.css'
// import { Form } from 'react-bootstrap';
// import Song from '../Song.jsx'
// import {useTimeout} from 'react-use';

// const GameInput = () => {
//     //start key
//     const [start, setStart] = useState(false);

//     //relate to loop on letter
//     const [index, setIndex] = useState(0);
//     const [write, setWrite] = useState([false]);
//     const [value, setValue] = useState([true, false, true])

//     //space need
//     const [spaceNeed, setSpaceNeed] = useState(false);

//     //hide lyric
//     const [hide, setHide] = useState([false, true])
//     const [index_2, setIndex_2] = useState(0);
//     const [textNumber, setTextNumber] = useState(3);

//     const newHide_2 = [...hide]
//     useEffect(() => {
//         for (let i = 0; i < textNumber; i++) {
//             if (i === 0) {
//                 newHide_2[i] = false;
//             }
//             else {
//                 newHide_2[i] = true;
//             }
//             setHide(newHide_2)
//         }
//     }, [])

//     const hideLyric = () => {
//         const newHide = [...hide]


//         //    const timer= setInterval(() => {
//         // for(index_2;index_2<textNumber;){
//         //    if(index_2<0){
//         //     newHide[index_2-1]=true;
//         //    }
//         //     newHide[index_2]=false;
//         //     setIndex_2(index_2+1)
//         //     break;
//         // }

//         // if (index_2 > 0){
//         //     newHide[index_2 - 1] = true;
//         // }
//         // newHide[index_2] = false;
//         // setHide(newHide)
//         // setIndex_2(index_2 + 1)
//         // }, 2000)

//     //    setTimeout(()=>{
//     //     newHide[index_2 + 1] = false;
//     //     newHide[index_2] = true
//     //     setIndex_2(index_2 + 1)
//     //     setHide(newHide)
//     //     console.log("round ", index_2)
//     //    },3000)


//         // return () => clearInterval(timer);


//     }

//     // const [timer, setTimer] = useState(0);
//     // const [intervalval,setIntervalval] = useState();
//     // const handleStart = () => {
//     //     let increment = setInterval(() => {
//     //         const timer_2=timer;
//     //         setTimer( timer_2+ 1)
//     //         console.log("timer value is :",timer)
//     //     }, 1000)
//     //     setIntervalval(increment);
//     // }

//     // const handleStop = () => {
//     //     clearInterval(intervalval)
//     //     setTimer(0)
//     // }

//     const [timer, setTimer] = useState();
//     const increment=useRef(null)
//     const handleStart = () => {
//         increment.current = setInterval(() => {
//             const timer_2=timer+1;
//             setTimer( timer_2)
//             console.log("timer value is :",timer)
//         }, 1000)

//     }

//     const handleStop = () => {
//         clearInterval(increment.current)
//         setTimer(0)
//         console.log(timer)
//     }



//     // useEffect(() => {
//     //     // const timer = setInterval(() => {
//     //     //     // do something
//     //     //   }, 2000);
//     //     const timePlus = () => {
//     //         setTime(time + 1)
//     //         console.log(time)

//     //     }
//     //     const timer = setInterval(() => timePlus(), 2000);

//     //     const handleStop=()=>{
//     //         clearInterval(timer);
//     //     }

//     //     return () => clearInterval(timer);
//     // }, [time]);


// useTimeout(()=>{
//     console.log('object')
// },2000)



//     const handleKeyPress = (e) => {
//         console.log("you pressed key", e.key)

//         //loop on letter
//         const name = "ali is not beautiful"


//         if (e.key === 'Backspace') {
//             console.log("pack")
//             return;
//         }
//         else {
//             const newArray = [...write]
//             newArray[index] = true;
//             setWrite(newArray)
//             const newValue = [...value];

//             if (name.charAt(index + 1) === ' ') {
//                 console.log("space")
//                 setSpaceNeed(true);
//             } else {
//                 setSpaceNeed(!!false)
//             }

//             if (e.key === name.charAt(index)) {
//                 console.log("your right", name.charAt(index))
//                 newValue[index] = true;
//                 setValue(newValue)
//                 setIndex(index + 1)
//                 return;
//             }
//             else {
//                 console.log("your wrong", name.charAt(index))
//                 newValue[index] = false;
//                 console.log(newValue)
//                 setValue(newValue)
//                 setIndex(index + 1)
//                 return;
//             }
//         }




//         // for (index; index < name.length;) {
//         // }







//     }





//     // const handleOnBlur = () => {
//     //     console.log("input blur")
//     // }

//     // const handleOnFocus = () => {
//     //     console.log("input focus")
//     // }

//     // const handleButton = (e) => {
//     //     e.preventDefault();
//     // }




//     return (


//         <>
//             <div >
//                 <h1 className='text_show'>
//                     <Song write={write} value={value} hide={hide} />

//                 </h1>

//                 {spaceNeed && <h1 className='bg-dark text-light'>need space</h1>}

//                 {/* <input type="button" onClick={()=>setHide(true)} value={'hide'}/> */}
//                 <input type="button" value={'stop setInterval'} onClick={handleStop}/>
//                 <input type="button" value={'start setInterval'} onClick={handleStart}/>


//                 <input type="button"
//                     className={`my_input ${start ? 'started' : 'start'}`}
//                     onBlur={() => setStart(false)}
//                     onClick={() => {
//                         setStart(true)
//                         hideLyric();
//                     }}
//                     onKeyDown={(e) => handleKeyPress(e)}
//                     value={`${start ? 'started' : 'start'}`}
//                 />

//                 <input type='button'
//                     className='stop' value={"Stop"} />
//             </div>

//         </>


//     )
// }

// export default GameInput


import React, { useEffect, useState } from 'react'
import './GameInput.css'
import Song from '../Song.jsx'
import TimeCounter from '../TimeCounter';
import { song_text,char_count, times } from '../SongRules';
const GameInput = () => {



    //start key
    const [start, setStart] = useState(false);

    //relate to loop on letter
    const [index, setIndex] = useState(0);
    const [write, setWrite] = useState([false]);
    const [value, setValue] = useState([true, false, true])

    //space need
    const [spaceNeed, setSpaceNeed] = useState(false);

    //hide lyric
    const [hide, setHide] = useState([])
    const [index_2, setIndex_2] = useState(0);
    const [textNumber, setTextNumber] = useState(3);

    //Time
    const [isSaving, setIsSaving] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const { goneTime } = TimeCounter(seconds, isSaving)

    //reset Time
    const handleResetTime = () => {
        setSeconds(0)
    }


    // Initialize the hide state with the correct length and values
    useEffect(() => {
        const newHide = Array(textNumber).fill(true);
        newHide[0] = false; // Show the first lyric
        setHide(newHide);

    }, [textNumber])

    //handle play song
    // const newHide=[...hide];
    // const handlePlaySong=()=>{
    //     console.log("paly song done")
    //     if(goneTime===2){
    //         newHide[0]=true;
    //         newHide[1]=false;
    //         setHide(newHide)
    //     }
    //     console.log("gone time is :",goneTime)
    // }


    //text animation
    // const {song_text,times}=SongRules;
    // const times=[2,5]
    console.log(times[0])
    useEffect(() => {
        const newHide = [...hide];
        if (start === true) {
            console.log("the song played")
            if (goneTime === times[index_2]) {
                newHide[index_2] = true;
                newHide[index_2 + 1] = false;
                setHide(newHide)
                setIndex(char_count[index_2])
                setIndex_2(index_2 + 1)
            }
        } else {
            console.log('object')
        }
    }, [goneTime, start])


    







    // Define a function to hide the current lyric and show the next one
    // const hideLyric = () => {

    //     // if (time === 2) {
    //     // Copy the hide state
    //     const newHide = [...hide];
    //     // Hide the current lyric
    //     newHide[index_2] = true;
    //     // Check if there is a next lyric
    //     if (index_2 + 1 < textNumber) {
    //         // Show the next lyric
    //         newHide[index_2 + 1] = false;
    //         // Update the index
    //         setIndex_2(index_2 + 1);
    //     }

    //     // Update the hide state
    //     setHide(newHide);


    //     console.log(index_2)
    //     // }
    // }


    // Use useTimeout to call hideLyric after 3 seconds


    const handleKeyPress = (e) => {
        console.log("you pressed key", e.key)

        //loop on letter
        // const song_text = "ali is not beautiful"

        //for handle Backspace
        if (e.key === 'Backspace') {
            console.log("pack")
            return;
        }
        else {
            const newArray = [...write]
            newArray[index] = true;
            setWrite(newArray)
            const newValue = [...value];

            if (song_text.charAt(index + 1) === ' ') {
                console.log("space")
                setSpaceNeed(true);
                // setIndex(index+1)
            } else {
                setSpaceNeed(false)
            }

            if (e.key === song_text.charAt(index)) {
                console.log("your right", song_text.charAt(index))
                newValue[index] = true;
                setValue(newValue)
                setIndex(index + 1)
                return;
            }
            else {
                console.log("your wrong", song_text.charAt(index))
                newValue[index] = false;
                console.log(newValue)
                setValue(newValue)
                setIndex(index + 1)
                return;
            }
        }
    }


    return (
        <div className="App">


            <>
                <div >
                    <h1 className='text_show'>
                        <Song write={write} value={value} hide={hide}/>
                    </h1>
                    {spaceNeed && <h1 className='bg-dark text-light'>need space</h1>}
                    {/* <input type="button" onClick={()=>setHide(true)} value={'hide'}/> */}

                    <input type="button"
                        className={`my_input ${start ? 'started' : 'start'}`}
                        onBlur={() => setStart(false)}
                        onClick={() => {
                            setStart(true)
                            // handleStart()
                            // hideLyric();
                            // handlePlaySong()
                            setIsSaving(true)

                        }}
                        onKeyDown={(e) => handleKeyPress(e)}
                        value={`${start ? 'started' : 'start'}`}
                    />

                    <input type='button'
                        className='stop' value={"Stop"}
                    />
                </div>
            </>
        </div>
    );
}

export default GameInput;
