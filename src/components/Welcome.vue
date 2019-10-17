<template>
    <div>
        <div class='welcome'>
            <h1>Welcome</h1>
        </div>
        <div class='welcome'>
            <h1 id='second'>How are you feeling today?</h1>
            <form>
            </form>
        </div>
        <!-- <CreatePost delay=3000 /> -->
    </div>
</template>

<script>
// import CreatePost from '../components/CreatePost'
export default {
    data(){
        // return{
        //     showForm: false
        // }
    },
    // components: {
    //     CreatePost
    // },
    mounted(){
        // setTimeout(() => {this.form=true}, 2000) 
    },
    methods: {
        // createPost() {
        //     this.form === true
            
        // },
        // showForm() {
        //     this.form = true
        // }
    }
}
</script>

<style lang="scss">
.welcome {
    text-align: center;
    font-size: 40px;
    padding: 20%;
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-duration: 5s;
    animation-direction: alternate;
    z-index: 1;
    @keyframes fade{
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }   
        100%{
            opacity: 0;
        }
    }
// .create-post {
//     text-align: center;
//     font-size: 40px;
//     padding: 20%;
//     animation-name: fadein;
//     animation-fill-mode: both;
//     animation-iteration-count: 1;
//     animation-duration: 5s;
//     animation-direction: alternate;
//     z-index: 1;
//     @keyframes fadein{
//         0% {
//             opacity: 0;
//         }
//         50% {
//             opacity: 1;
//         }   
//         100%{
//             opacity: 0;
//         }
//     }
// }
}

</style>