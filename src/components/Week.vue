<template>
    <div>
        <h1>Show week</h1>
        <ul>
            <li v-for='post of posts'>
            {{ post.created_at }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts: this.$store.state.user.posts
        }
    },
    methods: {
        // filterByWeek(){
        //     // this.posts.filter(post => {
        //     //     post.created_at ===
        //     // })
        // }
    }
}
</script>

<style lang="scss">

</style>