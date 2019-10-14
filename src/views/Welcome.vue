<template>
    <div class='welcome'>
        <button>Start</button>
    </div>
</template>

<style lang="scss">
.welcome {
    button {
        text-align: center;
        font-size: 1.5em;
        margin: 15% 42%;
        padding: 5% 4%;
        border: solid 0.2px rgb(176, 177, 180);
        border-radius: 300px;
        color: rgb(126, 131, 133);
        background-image: radial-gradient(circle, white, rgb(252, 252, 253), rgb(208, 211, 219));
        font-family: 'Julius Sans One', sans-serif;
        animation: shadow-pulse 3s infinite;
    }
    @keyframes shadow-pulse
    {
        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.03);
        }
        100% {
            box-shadow: 0 0 0 170px rgba(0, 0, 0, 0);
        }
    }
    button:hover {
        cursor: pointer;
    }
}
</style>