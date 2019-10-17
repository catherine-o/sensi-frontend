<template>
    <div class='welcome'>
        <h1>Welcome</h1>
    </div>
        <!-- <div class='createPost' v-else-if='createPost'>
            <h1>How are you feeling today?</h1>
        </div> -->
</template>

<script>
export default {
    data(){
        return{
            
        }
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
}

</style>