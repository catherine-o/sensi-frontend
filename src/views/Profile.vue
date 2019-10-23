<template>
    <div class='profile'>
        <div class='header'>
            <h1>Here is your Profile at a glance</h1>
        </div>
        <AllPosts />
    </div>
</template>

<script>
import AllPosts from '../components/AllPosts'
export default {
    data(){
        return{
            selected: 'week',
            showWeek: true,
            showMonth: false
        }
    },
    components: {
        AllPosts
    },
    methods: {
        changeSelected(){
            this.selected === 'week'
            ? (this.showWeek = true,
                this.showMonth = false)
            : this.showWeek = false, 
                this.showMonth = true
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
    display: flex;
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