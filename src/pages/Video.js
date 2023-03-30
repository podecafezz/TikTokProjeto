import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function hanndleStart() {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={hanndleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/tiktok-8ebf3.appspot.com/o/EBAC.mp4?alt=media&token=236af118-a6e0-4ef0-8ac6-be3bb45dc063"
      ></video>
    </div>
  );
}

export default Video;
