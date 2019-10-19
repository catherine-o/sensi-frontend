<template>
    <div class='profile'>
        <div class='header'>
            <h1>Here is your</h1>
            <form>
                <select v-model='selected' class='selection' @change='changeSelected()'>
                    <option value='week'>Week</option>
                    <option value='month'>Month</option>
                </select>
            </form>
            <h1>at a glance</h1>
        </div>
        <div v-if='showWeek'>
            <Week  />
        </div>
        <div v-else-if='showMonth'>
            <Month  />
        </div>
    </div>
</template>

<script>
import Week from '../components/Week'
import Month from '../components/Month'
export default {
    data(){
        return{
            selected: 'week',
            showWeek: true,
            showMonth: false
        }
    },
    components: {
        Week,
        Month
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
    padding-left: 10%;
    display: flex;
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