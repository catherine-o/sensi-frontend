<template>
    <div>
        <div class='welcome'>
            <h1>Welcome</h1>
        </div>
    </div>
</template>


<style lang="scss">
.welcome {
    text-align: center;
    font-size: 50px;
    padding: 8% 0;
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
}

</style>