<template>
    <div>
        <div ref='modal' id='modal' @click='hideModal'></div>
        <ul>
            <li v-for='post in posts' 
                :key='post.id'
                @click='showModal(post)'
                :style='determineColor(post)'>
                <span class='polarity'>{{ post.polarity }}</span>
                <span class='content'>{{ post.content }}</span>
            </li>
        </ul>
        <div class='footer'>
            <h1>-</h1>
            <div id='key'></div>
            <h1>+</h1>
        </div>
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
        },
        showModal(post){
            let date_only = (post.created_at).split('T')[0]
            let element = this.$refs.modal
            let color = this.determineColor(post).background-color            
            element.innerText = date_only + ' : ' + post.content
            element.style.display = 'block'
        },
        hideModal(){
            let element = this.$refs.modal
            element.style.display='none'
        }
    }
}
</script>

<style lang="scss">
#modal {
    display: none;
    height: 100px;
    width: 62%;
    z-index: 3;
    margin: auto;
    overflow: auto;
    padding: 1.5%;
    border-radius: 5px;
    background-color: rgba(241, 242, 243, 0.822);
    @media only screen and (min-width: 1500px){
        margin-left: 17%;
    }
}
ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    overflow: auto;
    // border-bottom: 2px solid black;
    @media only screen and (min-width: 900px){
    justify-content: center;
    margin: 0 12%;
    padding: 7% 5% 7% 7.5%;
    justify-content: flex-start;
    max-height: 40vh;
    }
    @media only screen and (min-width: 1500px){
        padding: 1% 5% 7% 5%;
    }
    li {
        border-radius: 5px;
        width: 70px;
        height: 70px;
        margin: 1%;
        color: rgba(255, 255, 255, 0);
    }
}
.footer {
    align-content: center;
    display: flex;
    @media only screen and (min-width: 900px){
        margin-top: 30px;
        justify-content: center;
    }
    #key {
        margin: auto 0;
        border-radius: 5px;
        height: 10px;
        width: 60%;
        background-color: gray;
        background-image: linear-gradient(to right, #1572B8, #9CD4FA, #E8F3FB, #FFF3A2, #FFD451);
    }
    h1 {
        margin: auto 15px;
        color: black;
    }
}
</style>