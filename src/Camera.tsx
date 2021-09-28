import { useEffect, useState, useRef } from 'react';

type Stream = MediaStream | null;

export function Camera(): JSX.Element {
  const [stream, setStream] = useState<Stream>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);

  async function startVideo(): Promise<void> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(stream);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (stream && cameraRef.current) {
      cameraRef.current.srcObject = stream;
      cameraRef.current.play();
    }
  }, [cameraRef, stream]);

  useEffect(() => {
    startVideo();
  }, []);

  return <video muted autoPlay className="camera" ref={cameraRef}></video>;
}
