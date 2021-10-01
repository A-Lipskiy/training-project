import { useEffect, useState, useRef } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { MoveNetModelConfig } from '@tensorflow-models/pose-detection';
import { HALF_CARD_SIZE } from './Game';

type Stream = MediaStream | null;
type Props = {
  onSetCoord: (y: number) => void;
};
const model = poseDetection.SupportedModels.MoveNet;
const moveNetConfig: MoveNetModelConfig = {
  modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
};
const THREASHOLD = 50;
const MAX_VALUE = 450;

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

    async function changePlayerCoord(video: HTMLVideoElement): Promise<void> {
      if (!detector) return;
      const poses = await detector.estimatePoses(video, {
        maxPoses: 1,
        flipHorizontal: false,
      });

      if (poses.length !== 0) {
        console.log(poses[0].keypoints[9].y);
        const yCoord = poses[0].keypoints[9].y;

        if (yCoord < THREASHOLD) onSetCoord(HALF_CARD_SIZE);
        else if (yCoord > MAX_VALUE - THREASHOLD)
          onSetCoord(100 - HALF_CARD_SIZE);
        else {
          const newPlayerCoord =
            (Math.floor(yCoord - THREASHOLD) / (MAX_VALUE - 2 * THREASHOLD)) *
              100 -
            HALF_CARD_SIZE * 2;
          if (newPlayerCoord < HALF_CARD_SIZE) onSetCoord(HALF_CARD_SIZE);
          else if (newPlayerCoord > 100 - HALF_CARD_SIZE)
            onSetCoord(100 - HALF_CARD_SIZE);
          else {
            onSetCoord(newPlayerCoord);
          }
        }
      }
    }

    const interval = setInterval(() => {
      changePlayerCoord(camera);
    }, 100);

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
