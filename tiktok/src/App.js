import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v77.tiktokcdn.com/87c28b1284c28bb0b79104104773d2fd/5f60137b/video/tos/useast2a/tos-useast2a-ve-0068c004/2362532506c24a66be8a02a69273732d/?a=1233&br=2652&bt=1326&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020091419055101018906515824022654&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2tmOHM1Ojc6dTMzMzczM0ApZDpnZmVmM2QzNzM3OmVmaWdeYm1nLjE0bWlfLS1iMTZzczIuNTZeYDNgNTM2XmFhMDU6Yw%3D%3D&vl=&vr="
          channel="huabdol"
          description="Hello World"
          song="99 problems and react aint one"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://v77.tiktokcdn.com/87c28b1284c28bb0b79104104773d2fd/5f60137b/video/tos/useast2a/tos-useast2a-ve-0068c004/2362532506c24a66be8a02a69273732d/?a=1233&br=2652&bt=1326&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020091419055101018906515824022654&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2tmOHM1Ojc6dTMzMzczM0ApZDpnZmVmM2QzNzM3OmVmaWdeYm1nLjE0bWlfLS1iMTZzczIuNTZeYDNgNTM2XmFhMDU6Yw%3D%3D&vl=&vr="
          channel="huabdol"
          description="Hello World"
          song="99 problems and react aint one"
          likes={123}
          messages={456}
          shares={789}
        />
      </div>

      {/*  app container */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
