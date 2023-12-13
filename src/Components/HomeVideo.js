import React from "react";

function HomeVideo() {
  return (
    <div className="mt-10 mb-20 ml-1 mr-1  justify-self-center">
      <video
        width="100%"
        height={25}
        className="rounded-md"
        autoPlay
        muted
        loop
      >
        <source src="/assets/productvid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default HomeVideo;
