<template>
    <div>
        <ul>
            <li v-for='(post, index) in posts' 
                :key='`post=${index}`'
                :style='determineColor(post)'>
            {{ post.polarity }}
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
                return {'background-color': '#1572B8'}
            } else if (post.polarity === 'negative') {
                return {'background-color': '#9CD4FA'}
            } else if (post.polarity === 'neutral') {
                return {'background-color': '#E8F3FB'}
            } else if (post.polarity === 'positive' && post.polarity_confidence < 0.75) {
                return {'background-color': '#FFF3A2'}
            } else if (post.polarity === 'positive' && post.polarity_confidence >= 0.75) {
                return {'background-color': '#FFD451'}
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
    align-content: center;
    justify-content: space-evenly;
    padding: 0 17%;
    overflow: auto;
    // border: 1px solid lightblue;
    @media only screen and (min-width: 900px){
        justify-content: flex-start;
        max-height: 70vh;
    }
    li {
        border-radius: 5px;
        width: 70px;
        height: 70px;
        margin: 1%;
        color: rgba(255, 255, 255, 0);
    }
}
</style>