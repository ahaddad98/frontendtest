import React from 'react';

interface VideoBackgroundProps {
  src: string;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  objectFit?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  muted = true,
  loop = true,
  autoPlay = true,
  objectFit = 'cover',
}) => {
  return (
    <div className="w-full h-full z-0 overflow-hidden opacity-60">
      <video
        src={src}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        // objectFit={objectFit}
      />
    </div>
  );
};

export default VideoBackground;
