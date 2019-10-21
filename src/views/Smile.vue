<template>
    <div class='smile'>
        <h1>Smile to Activate</h1>
        <div class='images'>
            <video ref="video" id="video" width="400" height="400" playsinline muted autoplay></video>
            <div>
            <canvas ref="canvas" id="emo_canvas" width="400" height="400"></canvas>
            </div>
        </div>
        <span>Smiling: {{ this.smile}}</span>
        <!-- <video ref="cam" id='video' @play='detectExpressions' width='640' height='480' autoplay muted playsinline></video> -->
        <p>Feel the endorphins</p>
    </div>
</template>

<script>
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)

export default ({
    template: '#main',
    data() {
        return {
        video: {},
        canvas: {},
        captures: [],
        testTimer: '',
        smile: ''
        };
    },
    beforeDestroy(){
        this.video.srcObject = null
        this.video.stop()
    },
    mounted() {
    //Start the PC front camera and display real-time video on the video tag
        this.video = this.$refs.video
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then(stream => {
            this.video.srcObject = stream
            this.video.play()
        })
        }

        console.log(this.$refs.canvas)

        this.canvas = this.$refs.canvas 
        this.testTimer = setInterval(() => {
        let context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 400, 300)
        this.captures.push(this.canvas.toDataURL("image/png")) //Store the captured image in the "captures" array
        let subscriptionKey = "key";
        let uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
        let params = {
            "returnFaceId": "true",
            "returnFaceLandmarks": "false",
            "returnFaceAttributes":
            "emotion"
        };
        //Convert the format of the image added at the end of the array and assign it to the imgURL format
        const imgURL = this.makeblob(this.captures[this.captures.length - 1])
        //Send imgURL image to Face API
        Axios.post(
            uriBase + "?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,emotion",
            imgURL,
            {
            headers: {
                "Content-Type": "application/octet-stream",
                "Ocp-Apim-Subscription-Key": subscriptionKey,
            }
            },
        )
        .then(response => {
            console.log(response.data[0].faceAttributes.emotion)

        })
        .catch(error => {
            // console.log(error.response)
        });
        }, 10000);
    },
    methods: {     
        makeblob: function (dataURL) {
        let BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            let parts = dataURL.split(',');
            let contentType = parts[0].split(':')[1];
            let raw = decodeURIComponent(parts[1]);
            return new Blob([raw], {type: contentType});
        }
        let parts = dataURL.split(BASE64_MARKER);
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;
        let uInt8Array = new Uint8Array(rawLength);
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {type: contentType})
        }
    }
    });
</script>


<style lang="scss">
.smile {
    @media only screen and (min-width: 500px){
        padding: 2% 0 0 15%;
        }
        .images {
            @media only screen and (min-width: 900px){
                display: flex;
            }
            #emo_canvas {
                padding-top: 5%;
                @media only screen and (min-width: 900px){ 
                    padding: 11% 0 0px 7%;
                }
            }
        }
    
}
</style>