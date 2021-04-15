import React from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import ReactPlayer from "react-player";

const Video = () => {

    return (
        <>
        <div className="projects">
            <div className="projects__container">
                <div className="projects__title">Video</div>
                <div className="video">
                    <ReactPlayer height={'600px'} width={'100%'} 
                    url='https://youtu.be/6F-wqIre9Tw' controls />
                </div>
            </div>
        </div>
        </>
    );
};

export default Video;
