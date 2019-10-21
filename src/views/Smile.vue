<template>
    <div class='smile'>
        <h1>Smile to Activate</h1>
        <video ref="cam" autoplay muted playsinline></video>
        <p>Feel the endorphins</p>
    </div>
</template>

<script>
import * as faceapi from 'face-api.js'
let stream = null
const minConfidenceFace = 0.5;
const faceapiOptions = new faceapi.SsdMobilenetv1Options({ minConfidenceFace });
export default {
    mounted() {
        this.initCamera(640, 480)
        .then(video => {
            this.detectExpressions()
        })
    },
    beforeDestroy() {
        stream
            .getTracks()
            .forEach(function(track) {
                track.stop();
            })
        stream = null
    },
    methods: {
        initCamera: async function(width, height) {
        // create cam reference
        let cam = this.$refs.cam;
        cam.width = width;
        cam.height = height;
        stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
            facingMode: "user",
            width: width,
            height: height
            }
        });
        cam.srcObject = stream;
        },
        detectExpressions: async function() {
            let cam = this.$refs.cam;
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
        }}
    }
}
</script>

<style lang="scss">
.smile {
    padding: 2% 0 0 15%;
}
</style>