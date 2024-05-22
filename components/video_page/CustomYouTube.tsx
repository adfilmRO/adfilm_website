import React, { useEffect, useRef, useState } from "react";

const styles = { image: "_2hdkJ", playButton: "_16Q0f" };

interface YouTubeProps {
  videoId: string;
  width?: string | number;
  height?: string | number;
  privacy?: boolean;
  onPlayChange?: (playing: boolean) => void;
  playing?: boolean;
  className?: string;
}

const CustomYouTube: React.FC<YouTubeProps> = (props) => {
  const {
    videoId,
    width = "560px",
    height = "315px",
    privacy = false,
    onPlayChange,
    playing = false,
    className = "",
  } = props;

  const [showVideo, setShowVideo] = useState(playing);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setShowVideo(playing);
    if (playing) {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    } else {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [playing]);

  useEffect(() => {
    const handlePlayerStateChange = (event: MessageEvent) => {
      if (event.data === "paused" && onPlayChange) {
        onPlayChange(false);
      } else if (event.data === "playing" && onPlayChange) {
        onPlayChange(true);
      }
    };

    if (iframeRef.current) {
      iframeRef.current.contentWindow?.addEventListener(
        "message",
        handlePlayerStateChange
      );
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.removeEventListener(
          "message",
          handlePlayerStateChange
        );
      }
    };
  }, [onPlayChange]);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
    if (onPlayChange) {
      onPlayChange(true);
    }
  };

  return (
    <>
      {showVideo ? (
        <iframe
          ref={iframeRef}
          className={className}
          width={width}
          height={height}
          src={`https://www.youtube${privacy ? "-nocookie" : ""}.com/embed/${videoId}?autoplay=1&showinfo=0&rel=0&enablejsapi=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className={`${styles.image} ${className}`}
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            width: width,
            height: height,
          }}
          onClick={handlePlayButtonClick}
        >
          <div className={styles.playButton}></div>
        </div>
      )}
    </>
  );
};

export default CustomYouTube;
