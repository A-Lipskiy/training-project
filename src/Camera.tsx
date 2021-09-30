import { useEffect, useState, useRef } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { MoveNetModelConfig } from '@tensorflow-models/pose-detection';

type Stream = MediaStream | null;
type Props = {
  onSetCoord: (y: number) => void;
};
const model = poseDetection.SupportedModels.MoveNet;
const moveNetConfig: MoveNetModelConfig = {
  modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
};
const TOP_BORDER = 50;
const BOTTOM_BORDER = 400;
export function Camera({ onSetCoord }: Props): JSX.Element {
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
      const poses = await detector.estimatePoses(video, {
        maxPoses: 1,
        flipHorizontal: false,
      });
      if (
        poses.length !== 0 &&
        poses[0].keypoints[9].y >= TOP_BORDER &&
        poses[0].keypoints[9].y <= BOTTOM_BORDER
      ) {
        onSetCoord(Math.floor(poses[0].keypoints[9].y / 3.5));
      }
    }

    const interval = setInterval(() => {
      logAICoords(camera);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [detector, onSetCoord, stream]);

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

  return <video muted autoPlay className="camera" ref={cameraRef}></video>;
}
