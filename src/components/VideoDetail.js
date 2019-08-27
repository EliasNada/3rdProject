import React from "react";
import "../style/video.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <iframe
          width="100%"
          height="730px"
          src="https://www.youtube.com/embed/aRsWk4JZa5k"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          title="meow"
        />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${
    video.id.videoId
  }?autoplay=1`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
