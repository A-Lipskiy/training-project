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
    const copyCameraRef = cameraRef;

    if (!stream || !copyCameraRef.current) return;

    copyCameraRef.current.srcObject = stream;
    copyCameraRef.current.play();

    return () => {
      copyCameraRef.current?.pause();
    };
  }, [cameraRef, stream]);

  useEffect(() => {
    startVideo();
    return () => setStream(null);
  }, []);

  return <video muted autoPlay className="camera" ref={cameraRef}></video>;
}
