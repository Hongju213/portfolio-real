import React from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import ReactPlayer from "react-player";

const Video = () => {

    return (
        <>
        <div className="about">
      <div className="about__container">
        <div className="about__title">Video</div>
            <ReactPlayer
            url='https://youtu.be/6F-wqIre9Tw' controls width={'100%'} height={'600px'} />
      </div>
    </div>
        </>
    );
};

export default Video;
