<template>
    <div>
        <h1>AllPosts</h1>
        <ul>
            <li v-for='(post, index) in posts' 
                :key='`post=${index}`'
                :style='determineColor(post)'>
            {{ post.polarity }}
            {{ post.polarity_confidence }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts: this.$store.state.user.posts,
            // variants: [
            //     {
            //         variantId: 1,
            //         variantColor: 'dark blue'
            //     }
            // ]
        }
    },
    methods: {
       determineColor(post){
           if (post.polarity === 'positive') {
               return {'background-color': 'yellow'}
           } else if (post.polarity === 'negative') {
               return {'background-color': 'darkblue'}
           } else if (post.polarity === 'neutral') {
               return {'background-color': 'beige'}
           }
       }
    }
}
</script>

<style lang="scss">
ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    li {
        border: 1px solid lightgray;
    }
}
</style>