<template>
    <div class='timer'>
        {{ countdown }}
    </div>
</template>

<script>
let count = ''
export default {
    data(){
        return{
            countdown: 6
        }
    },
    mounted() {
        this.countdownTimer()
    },
    beforeDestroy(){
        clearInterval(count)
    },
    methods: {
        countdownTimer(){
            if(this.countdown > -1){
                count = setTimeout(() => {
                    this.countdown -= 1
                    this.countdownTimer()
                }, 1000)
            } else {
                this.countdown = 5
                this.countdownTimer()
            }
        }
    }
}
</script>


<style lang="scss">
.timer {
    font-size: 50px;
    padding: 10px 20%;
    z-index: 3;
}
</style>