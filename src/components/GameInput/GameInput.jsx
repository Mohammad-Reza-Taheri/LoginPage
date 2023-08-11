import React, { useEffect, useState } from 'react'
import './GameInput.css'
import { Form } from 'react-bootstrap';
import Song from '../Song.js'

const GameInput = () => {
    const [start, setStart] = useState(false);
    const [keyValue, setKeyValue] = useState([false]);


    // const [letterValue, setLetterValue] = useState(false);
    const [index, setIndex] = useState(0);
    const [write, setWrite] = useState([false]);
    const [value, setValue] = useState([true, false, true])


    const handleKeyPress = (e) => {
        console.log("you pressed key", e.key)
        // setKeyValue(keyValue + e.key)
        // if (e.key === 'b') {
        //     console.log("my name is b 😁")
        // }
        // console.log(keyValue)





        //loop on letter
        const name = "ali is not beautiful"

        const newArray = [...write]
        newArray[index] = true;
        setWrite(newArray)

        const newValue = [...value];
        if (e.key === name.charAt(index)) {
            console.log("your right", name.charAt(index))
            newValue[index] = true;
            setValue(newValue)
            setIndex(index + 1)
            return;
        }
        else {
            console.log("your wrong", name.charAt(index))
            newValue[index] = false;
            console.log(newValue)
            setValue(newValue)
            setIndex(index + 1)
            return;
        }





        // for (index; index < name.length;) {
        // }







    }





    // const handleOnBlur = () => {
    //     console.log("input blur")
    // }

    // const handleOnFocus = () => {
    //     console.log("input focus")
    // }

    // const handleButton = (e) => {
    //     e.preventDefault();
    // }




    return (


        <>
            <div >
                {/* <h1>Key Value is: {keyValue}</h1> */}
                <h1 className='text_show'>
                    <Song write={write} value={value}/>
                    {/* <span className={write[0] ? (value[0] ? 'white' : 'red') : 'gray'}>a</span>
                    <span className={write[1] ? (value[1] ? 'white' : 'red') : 'gray'}>l</span>
                    <span className={write[2] ? (value[2] ? 'white' : 'red') : 'gray'}>i</span> */}
                </h1>





                <input type="button"
                    className={`my_input ${start ? 'started' : 'start'}`}
                    onBlur={() => setStart(false)} onClick={() => setStart(true)}
                    onKeyDown={(e) => handleKeyPress(e)}
                    value={`${start ? 'started' : 'start'}`}
                />

                <input type='button'
                    className='stop' value={"Stop"} />
            </div>

        </>


    )
}

export default GameInput