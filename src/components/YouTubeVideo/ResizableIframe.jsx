import { useEffect, useRef, useState } from 'react';
import { getVideoId } from './utils';

const ResizableIframe = ({ video, videoRef = useRef(null) }) => {
  const iframeRef = videoRef;
  const [height, setHeight] = useState('100px');

  useEffect(() => {
    const updateHeight = () => {
      const width = iframeRef.current?.offsetWidth || window.innerWidth;
      setHeight((width * 9) / 16);
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: '100%', height, border: 'none' }}
      src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={video.title}
    />
  );
};

export default ResizableIframe;
