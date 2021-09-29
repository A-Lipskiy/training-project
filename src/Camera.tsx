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
      camera.pause();
    };
  }, [stream]);

  useEffect(() => {
    let cameraStream: Stream;

    async function startVideo() {
      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(cameraStream);
      } catch (e) {
        console.log(e);
      }
    }
    startVideo();

    return () => cameraStream?.getTracks().forEach((track) => track.stop());
  }, []);
  return <video muted autoPlay className="camera" ref={cameraRef}></video>;
}
