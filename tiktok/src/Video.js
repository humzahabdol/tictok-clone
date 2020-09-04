import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/b0524d66018042fe438af61989ee30d5/5f51e18d/video/tos/useast2a/tos-useast2a-ve-0068c004/2362532506c24a66be8a02a69273732d/?a=1233&br=2652&bt=1326&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200904004105010189073077093221E8&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2tmOHM1Ojc6dTMzMzczM0ApZDpnZmVmM2QzNzM3OmVmaWdeYm1nLjE0bWlfLS1iMTZzczIuNTZeYDNgNTM2XmFhMDU6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter></VideoFooter>
      {/* Video footer */}
      {/* VideoSidebar  */}
    </div>
  );
}

export default Video;
