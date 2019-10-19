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
            posts: this.$store.state.user.posts
        }
    },
    methods: {
        determineColor(post){
            if (post.polarity === 'negative' && post.polarity_confidence >= 0.75) {
                return {'background-color': 'darkblue'}
            } else if (post.polarity === 'negative') {
                return {'background-color': 'blue'}
            } else if (post.polarity === 'neutral') {
                return {'background-color': 'orange'}
            } else if (post.polarity === 'positive' && post.polarity_confidence < 0.75) {
                return {'background-color': 'lightyellow'}
            } else if (post.polarity === 'positive' && post.polarity_confidence >= 0.75) {
                return {'background-color': 'yellow'}
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
        width: 20%;
        margin: 15px;
    }
}
</style>