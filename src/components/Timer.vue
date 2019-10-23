<template>
    <div class='timer'>
        {{ countdown }}
    </div>
</template>

<script>
export default {
    data(){
        return{
            countdown: 6
        }
    },
    mounted() {
        this.countdownTimer()
    },
    methods: {
        countdownTimer(){
            if(this.countdown > -1){
                setTimeout(() => {
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

</style>