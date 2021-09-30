import { useEffect, useState, useRef } from 'react';

type Stream = MediaStream | null;

export function Camera(): JSX.Element {
  const [stream, setStream] = useState<Stream>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const camera = cameraRef.current;

    if (!stream || !camera) return;

    camera.srcObject = stream;
    camera.play();

    return () => {
      stream.getTracks().forEach((track) => track.stop());
    };
  }, [stream]);

  useEffect(() => {
    async function startVideo() {
      try {
        setStream(
          await navigator.mediaDevices.getUserMedia({
            video: true,
          })
        );
      } catch (e) {
        console.log(e);
      }
    }
    startVideo();
  }, []);
  return <video muted autoPlay className="camera" ref={cameraRef}></video>;
}
