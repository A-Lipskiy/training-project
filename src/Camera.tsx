import { useEffect, useState, useRef } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { MoveNetModelConfig } from '@tensorflow-models/pose-detection';
import { HALF_CARD_SIZE } from './Game';

type Props = {
  onSetPlayer1Coord: (y: number) => void;
  onSetPlayer2Coord: (y: number) => void;
};
const model = poseDetection.SupportedModels.MoveNet;
const moveNetConfig: MoveNetModelConfig = {
  modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
};
const THREASHOLD = 50;
const MAX_VALUE = 400;

export function Camera({
  onSetPlayer1Coord,
  onSetPlayer2Coord,
}: Props): JSX.Element {
  const [stream, setStream] = useState<MediaStream | null>(null);
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
        const player1Y = poses[0].keypoints[9].y;
        const player2Y = poses[0].keypoints[10].y;

        const newPlayer1Coord = Math.floor(
          ((player1Y - THREASHOLD) / (MAX_VALUE - 2 * THREASHOLD)) *
            (100 - HALF_CARD_SIZE * 2)
        );
        const newPlayer2Coord = Math.floor(
          ((player2Y - THREASHOLD) / (MAX_VALUE - 2 * THREASHOLD)) *
            (100 - HALF_CARD_SIZE * 2)
        );

        if (newPlayer1Coord < HALF_CARD_SIZE) onSetPlayer1Coord(HALF_CARD_SIZE);
        else if (newPlayer1Coord > 100 - HALF_CARD_SIZE)
          onSetPlayer1Coord(100 - HALF_CARD_SIZE);
        else onSetPlayer1Coord(newPlayer1Coord);

        if (newPlayer2Coord < HALF_CARD_SIZE) onSetPlayer2Coord(HALF_CARD_SIZE);
        else if (newPlayer2Coord > 100 - HALF_CARD_SIZE)
          onSetPlayer2Coord(100 - HALF_CARD_SIZE);
        else onSetPlayer2Coord(newPlayer2Coord);
      }
    }

    const interval = setInterval(() => {
      changePlayerCoord(camera);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [detector, onSetPlayer1Coord, onSetPlayer2Coord, stream]);

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
