<template>
    <div class='smile'>
        <div class='header'>
        <h1>Smile Big to Activate!</h1><Timer />
        </div>
        <div class='images'>
            <video ref="video" id="video" width="400" height="400" playsinline muted autoplay></video>
            <div>
            <canvas ref="canvas" id="emo_canvas" width="400" height="400"></canvas>
            </div>
        </div>
        <span>Smiling: {{ this.smile }} %</span>
        <p>Feel the endorphins</p>
    </div>
</template>

<script>
import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios'
import router from '../router'
import Timer from '../components/Timer'

Vue.use(VueAxios, Axios)
let camera = null

export default ({
    template: '#main',
    data() {
        return {
        video: {},
        canvas: {},
        captures: [],
        testTimer: '',
        smile: 0
        };
    },
    components: {
        Timer
    },
    beforeDestroy(){
        camera
            .getTracks()
            .forEach(function(track) {
                track.stop();
            })
        camera = null
        clearInterval(this.testTimer)
    },
    mounted() {
    //Start the PC front camera and display real-time video on the video tag
        this.video = this.$refs.video
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then(stream => {
            camera = stream
            this.video.srcObject = stream
            this.video.play()
        })
        }

        this.canvas = this.$refs.canvas 
        this.testTimer = setInterval(() => {
        let context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 400, 300)
        this.captures.push(this.canvas.toDataURL("image/png")) //Store the captured image in the "captures" array
        let subscriptionKey ='b5f4ba8d076b486f9147b4d68c67b10b';
        let uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
        let params = {
            "returnFaceId": "true",
            "returnFaceLandmarks": "false",
            "returnFaceAttributes": "emotion"
        }
        //Convert the format of the image added at the end of the array and assign it to the imgURL format
        const imgURL = this.makeblob(this.captures[this.captures.length - 1])
        //Send imgURL image to Face API
        Axios.post(
            uriBase + "?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion",
            imgURL,
            {
            headers: {
                "Content-Type": "application/octet-stream",
                "Ocp-Apim-Subscription-Key": subscriptionKey,
            }
            },
        )
        .then(response => {
            this.smile = (response.data[0].faceAttributes.emotion.happiness) * 100
            if (this.smile > 95){ 
                setTimeout(() => {
                router.push({ path: '/views'})
                }, 3000)
            }
        })
        .catch(error => {
            console.log(error.response)
        });
        }, 6000);
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
    .header{
        margin-left: -14%;
        display: flex;
    }
    @media only screen and (min-width: 500px){
        padding: 2% 0 0 15%;
        }
        .images {
            @media only screen and (min-width: 900px){
                display: flex;
                padding: 1% 0 0 5%;
            }
            #emo_canvas {
                padding-top: 5%;
                @media only screen and (min-width: 900px){ 
                    padding: 11.5% 0 0px 7%;
                }
            }
        }
    
}
</style>