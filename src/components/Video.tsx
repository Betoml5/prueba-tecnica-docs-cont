import React from "react";

const Video = () => {
  return (
    <iframe
      src="https://www.youtube.com/embed/E7wJTI-1dvQ"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
      height={250}
      className="w-full md:h-96"
    />
  );
};

export default Video;
