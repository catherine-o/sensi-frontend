import * as faceapi from 'face-api.js';
// init detection options
const minConfidenceFace = 0.5;
const faceapiOptions = new faceapi.SsdMobilenetv1Options({ minConfidenceFace });

// configure face API
faceapi.env.monkeyPatch({
    Canvas: HTMLCanvasElement,
    Image: HTMLImageElement,
    ImageData: ImageData,
    Video: HTMLVideoElement,
    createCanvasElement: () => document.createElement('canvas'),
    createImageElement: () => document.createElement('img')
  });

  let loadNet = async () => {
    let detectionNet = faceapi.nets.ssdMobilenetv1;
    await detectionNet.load('/data/weights');
    await faceapi.loadFaceExpressionModel('/data/weights');
    return detectionNet;
  };
  

let cam;
let initCamera = async (width, height) => {
  cam = document.getElementById('cam');
  cam.width = width;
  cam.height = height;
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "user",
      width: width,
      height: height
    }
  });
  cam.srcObject = stream;
  return new Promise((resolve) => {
    cam.onloadedmetadata = () => {
      resolve(cam);
    };
  });
};

let onReady = () => {
    notifyRenderer('ready', {});
  };
  let onExpression = (type) => {
    notifyRenderer('expression', { type: type });
  };
  let notifyRenderer = (command, payload) => {
    ipcRenderer.send('window-message-from-worker', {
      command: command, payload: payload
    });
  }

  let detectExpressions = async () => {
    // detect expression
    let result = await faceapi.detectSingleFace(cam, faceapiOptions)
      .withFaceExpressions();
    if(!isReady) {
      isReady = true;
      onReady();
    }
    if(typeof result !== 'undefined') {
      let happiness = 0, anger = 0;
      if(result.expressions.hasOwnProperty('happy')) {
        happiness = result.expressions.happy;
      }
      if(result.expressions.hasOwnProperty('angry')) {
        anger = result.expressions.angry;
      }
      if(happiness > 0.7) {
        onExpression('happy');
      } else if(anger > 0.7) {
        onExpression('angry');
      }
    }
    if(isRunning) {
      detectExpressions();
    }
  };


loadNet()
    .then(net   => { return initCamera(640, 480); })
    .then(video => { detectExpressions(); });