import React from "react";

export const RealStories = () => {
  const videos = [
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939269/thechoiceschoolkochi_2396992194_xj1zmk.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939269/eventiamiddleeast_2397100622_imwrzh.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939270/thechoiceschoolkochi_2396868545_kku9re.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939270/eventiamiddleeast_2397179228_yo5biz.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939482/_hawkspot__2396281520_uvzavh.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939483/dubai_gold_and_diamonds_2396372525_zku1kp.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939487/ayumanthra_2395873315_tbdjib.mp4",
  ];

  return (
    <section id="stories" className="realstories">
      <h1 className="realstories-title">Real Stories</h1>
      <div className="realstories-rot">
        <div className="realstories-slide">
          {videos.map((video, index) => (
            <video
              key={`video-${index}`}
              src={video}
              // Initially muted to allow autoplay
              muted
              alt={`Story ${index + 1}`}
              onClick={(e) => (e.target.muted = false)} // Unmute on first click
              onMouseEnter={(e) => e.target.play()} // Play video on hover
              onMouseLeave={(e) => e.target.pause()} // Pause video when mouse leaves
            />
          ))}
          {videos.map((video, index) => (
            <video
              key={`video-duplicate-${index}`}
              src={video}
              // mute
              alt={`Story ${index + 1}`}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
          ))}
          {videos.map((video, index) => (
            <video
              key={`video-duplicate-${index}`}
              src={video}
              // muted
              alt={`Story ${index + 1}`}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
          ))}
          {videos.map((video, index) => (
            <video
              key={`video-duplicate-${index}`}
              src={video}
              // muted
              alt={`Story ${index + 1}`}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
