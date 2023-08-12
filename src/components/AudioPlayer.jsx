// import React from "react";
// import { useAudioPlayer } from "react-use-audio-player";

// function AudioPlayer() {
//   const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
//     src: 'https://ts1.tarafdari.com/contents/user177083/content-sound/01_-_rolling_in_the_deep.mp3',
//     format: "mp3",
//     autoplay: true,
//     onend: () => console.log("sound has ended!"),
//   });

//   if (!ready && !loading) return <div>No audio to play</div>;
//   if (loading) return <div>Loading audio</div>;

//   return (
//     <div>
//       <h1>Playing audio in React</h1>
//       <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// }

// export default AudioPlayer;





// import React, { useState } from 'react';
// import ReactAudioPlayer from 'react-audio-player';

// const AudioPlayer=()=>{

//     const [currentTime,setCurrentTime]=useState(0)

//     return (
//       <div>
//         <h1>پخش آهنگ در ری اکت</h1>
//         <ReactAudioPlayer
//           src="https://ts1.tarafdari.com/contents/user177083/content-sound/01_-_rolling_in_the_deep.mp3"
          
//           controls
//           listenInterval={1000}
//           onListen={(time) => setCurrentTime(time)}
//           seekTo={currentTime}
//         />
//         <button onClick={() => setCurrentTime(10)}>Start from 10 seconds</button>
     
//       </div>
//     );

// }

// export default AudioPlayer;



import React, { useRef } from "react";

function AudioPlayer({}) {
  const audioRef = useRef(null);

  return (
    <div>
      <h1>Playing audio in React</h1>
      <audio
        ref={audioRef}
        // src="https://ts1.tarafdari.com/contents/user177083/content-sound/01_-_rolling_in_the_deep.mp3"
        // src="./songs/nasaLive.mp3"
        src="./songs/rollingInTheDeep.mp3"
        
        controls
      />
      <input type="button" value={"Start from 10 seconds"} onClick={() => (audioRef.current.currentTime = 10)}/>
      <input type="button" value={"pause"} onClick={()=>audioRef.current.pause()}/>
      <input type="button" value={"play"} onClick={()=>audioRef.current.play()}/>


    </div>
  );
}

export default AudioPlayer;
