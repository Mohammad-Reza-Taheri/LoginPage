import React, { useState } from 'react'

const Song = (props) => {
    const {write,value,hide}=props;
    
    return (
  <div>
    <div hidden={hide[0]}>...</div>
          <div hidden={hide[1]}>
            <span className={write[0] ? (value[0] ? 'white' : 'red') : 'gray'}>a</span>
            <span className={write[1] ? (value[1] ? 'white' : 'red') : 'gray'}>l</span>
            <span className={write[2] ? (value[2] ? 'white' : 'red') : 'gray'}>i</span>
            <span className={write[3] ? (value[3] ? 'white' : 'red') : 'gray'}> </span>
            <span className={write[4] ? (value[4] ? 'white' : 'red') : 'gray'}>i</span>
            <span className={write[5] ? (value[5] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[6] ? (value[6] ? 'white' : 'red') : 'gray'}> </span>
            <span className={write[7] ? (value[7] ? 'white' : 'red') : 'gray'}>n</span>
            <span className={write[8] ? (value[8] ? 'white' : 'red') : 'gray'}>o</span>
            <span className={write[9] ? (value[9] ? 'white' : 'red') : 'gray'}>t</span>
            <span className={write[10] ? (value[10] ? 'white' : 'red') : 'gray'}> </span>
            <span className={write[11] ? (value[11] ? 'white' : 'red') : 'gray'}>b</span>
            <span className={write[12] ? (value[12] ? 'white' : 'red') : 'gray'}>e</span>
            <span className={write[13] ? (value[13] ? 'white' : 'red') : 'gray'}>a</span>
            <span className={write[14] ? (value[14] ? 'white' : 'red') : 'gray'}>u</span>
            <span className={write[15] ? (value[15] ? 'white' : 'red') : 'gray'}>t</span>
            <span className={write[16] ? (value[16] ? 'white' : 'red') : 'gray'}>i</span>
            <span className={write[17] ? (value[17] ? 'white' : 'red') : 'gray'}>f</span>
            <span className={write[18] ? (value[18] ? 'white' : 'red') : 'gray'}>u</span>
            <span className={write[19] ? (value[19] ? 'white' : 'red') : 'gray'}>l</span>
        </div>

        <div hidden={hide[2]}>
            <span className={write[0] ? (value[0] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[1] ? (value[1] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[2] ? (value[2] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[3] ? (value[3] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[4] ? (value[4] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[5] ? (value[5] ? 'white' : 'red') : 'gray'}>s</span>
            <span className={write[6] ? (value[6] ? 'white' : 'red') : 'gray'}> </span>
            <span className={write[7] ? (value[7] ? 'white' : 'red') : 'gray'}>n</span>
            <span className={write[8] ? (value[8] ? 'white' : 'red') : 'gray'}>o</span>
            <span className={write[9] ? (value[9] ? 'white' : 'red') : 'gray'}>t</span>
            <span className={write[10] ? (value[10] ? 'white' : 'red') : 'gray'}> </span>
            <span className={write[11] ? (value[11] ? 'white' : 'red') : 'gray'}>b</span>
            <span className={write[12] ? (value[12] ? 'white' : 'red') : 'gray'}>e</span>
            <span className={write[13] ? (value[13] ? 'white' : 'red') : 'gray'}>a</span>
            <span className={write[14] ? (value[14] ? 'white' : 'red') : 'gray'}>u</span>
            <span className={write[15] ? (value[15] ? 'white' : 'red') : 'gray'}>t</span>
            <span className={write[16] ? (value[16] ? 'white' : 'red') : 'gray'}>i</span>
            <span className={write[17] ? (value[17] ? 'white' : 'red') : 'gray'}>f</span>
            <span className={write[18] ? (value[18] ? 'white' : 'red') : 'gray'}>u</span>
            <span className={write[19] ? (value[19] ? 'white' : 'red') : 'gray'}>l</span>
        </div>


        
  </div>
    )
}

export default Song