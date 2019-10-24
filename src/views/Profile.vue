<template>
    <div v-if='chart'>
        <div class='header'>
            <h1>Here is your Profile at a glance</h1>
            <p @click='toggleChart'>View All</p>
        </div>
        <Chart :styles='chartStyles'/>
    </div>
    <div v-else class='profile'>
        <div class='header'>
            <h1>Here is your Profile at a glance</h1>
            <p @click='toggleChart'>View Chart</p>
        </div>
        <AllPosts />
    </div>
</template>

<script>
import AllPosts from '../components/AllPosts'
import Chart from '../components/Chart.vue'
export default {
    data(){
        return{
            chart: false
        }
    },
    components: {
        AllPosts,
        Chart
    },
    computed: {
        chartStyles(){
            return {
                width: '500px',
                height: '200px',
                margin: '3% 33%'
            }
        }
    },
    methods: {
        toggleChart(){
            this.chart !== true
            ? this.chart = true
            : this.chart = false
        }
    }
}
</script>

<style lang="scss">
.header{
    margin-top: -15px;
    padding: 0 20px;
    @media only screen and (min-width: 900px){
    padding: 2% 0 0 15%;
    }
    @media only screen and (min-width: 1500px){
    padding: 1% 0 0 15%;
    }
    .selection {
        font-size: 32px;
        font-family: 'Titillium Web', sans-serif;
        border: none;
        margin: 13px;
        background-color: #26a7fd13;
        color: rgb(93, 96, 97);
    }
}
</style>