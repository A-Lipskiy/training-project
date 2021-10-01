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

function calculatePlayerCoord(y: number): number {
  const newPlayerCoord = Math.floor(
    ((y - THREASHOLD) / (MAX_VALUE - 2 * THREASHOLD)) *
      (100 - HALF_CARD_SIZE * 2)
  );

  if (newPlayerCoord < HALF_CARD_SIZE) return HALF_CARD_SIZE;
  else if (newPlayerCoord > 100 - HALF_CARD_SIZE) return 100 - HALF_CARD_SIZE;
  else return newPlayerCoord;
}
export function Camera({
  onSetPlayer1Coord,
  onSetPlayer2Coord,
}: Props): JSX.Element {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const cameraRef = useRef<HTMLVideoElement>(null);
  const [detector, setDetector] = useState<poseDetection.PoseDetector | null>(
    null
  );
  const [isCameraOnScreen, setIsCameraOnScreen] = useState(true);

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

        onSetPlayer1Coord(calculatePlayerCoord(player1Y));
        onSetPlayer2Coord(calculatePlayerCoord(player2Y));
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

  return (
    <div>
      <label className="label-camera">
        Show camera:
        <input
          type="checkbox"
          checked={isCameraOnScreen}
          onClick={() => setIsCameraOnScreen(!isCameraOnScreen)}
        />
      </label>
      <video
        muted
        autoPlay
        className={`camera ${!isCameraOnScreen ? 'display-none' : ''}`}
        ref={cameraRef}
      ></video>
    </div>
  );
}
