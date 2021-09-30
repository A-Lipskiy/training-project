import { useEffect, useState, useRef } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { MoveNetModelConfig } from '@tensorflow-models/pose-detection';

type Stream = MediaStream | null;

const model = poseDetection.SupportedModels.MoveNet;
const moveNetConfig: MoveNetModelConfig = {
  modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
};

export function Camera(): JSX.Element {
  const [stream, setStream] = useState<Stream>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);
  const [detector, setDetector] = useState<poseDetection.PoseDetector | null>(
    null
  );

  useEffect(() => {
    const camera = cameraRef.current;

    if (!stream || !camera) return;

    camera.srcObject = stream;
    camera.play();

    async function logAICoords(video: HTMLVideoElement): Promise<void> {
      if (!detector) return;
      const poses = await detector.estimatePoses(video);
      console.log(poses[0].keypoints[9], poses[0].keypoints[10]);
    }

    const interval = setInterval(() => {
      logAICoords(camera);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [detector, stream]);

  useEffect(() => {
    return () => detector?.dispose();
  }, [detector]);
  useEffect(() => {
    return () => stream?.getTracks().forEach((track) => track.stop());
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

    async function initAI(): Promise<void> {
      try {
        setDetector(await poseDetection.createDetector(model, moveNetConfig));
      } catch (e) {
        console.log(e);
      }
    }
    startVideo();
    initAI();
  }, []);

  return (
    <div>
      <video muted autoPlay className="camera" ref={cameraRef}></video>
    </div>
  );
}
