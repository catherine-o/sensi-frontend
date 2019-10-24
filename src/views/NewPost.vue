<template>
    <div v-if='showForm' class='create-post'>
        <h1>How are you feeling today?</h1>
        <form class='post-form'>
            <textarea id='content' 
                v-model='input.content' 
                rows='10' cols='100'
                placeholder="Two words or one story ...">
            </textarea>
        </form>
        <div class='form-bottom'>
            <p>Try to be descriptive</p>
            <button @click='analyzeText'>Submit</button>
        </div>
    </div>
    <div v-else>
        <h1 class='thanks'>Thank you for sharing</h1>
    </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'
export default {
    data(){
        return{
            input: {
                content: null
            },
            showForm: true
        }
    },
    mounted(){
    },
    methods: {
        hideForm(){
            this.showForm = false
            setTimeout(() => {
                router.push({ path: '/profile'})
            }, 4000)
        },
        analyzeText(){
            let userID = this.$store.state.user.id
            let token = localStorage.getItem('token')
            fetch('https://sensi-backend.herokuapp.com/api/users/' + userID + '/posts', {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'content': this.input.content
                })
            })
            .then(response => response.json())
            .then(result => this.$store.dispatch('updatePosts', result.user)),
                this.hideForm()
        }
    }
}
</script>

<style lang="scss">
.create-post {
    text-align: center;
    font-size: 20px;
    padding: 7%;
    #content {
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 20px;
        padding: 15px;
    }
    .form-bottom {
        display: flex;
        justify-content: space-around;
        align-content: center;
        @media only screen and (min-width: 1500px){
            justify-content: space-evenly;
        }
        button {
            background-color: #26a7fd13;
            width: 200px;
            height: 35px;
            border-radius: 10px;
            margin-top: 15px;
            font-size: 15px;
            padding: 3px 15px;
            font-family: 'Titillium Web', sans-serif;
        }
        button:hover {
            cursor: pointer;
            background-color: #a2acb3;
            margin-top: 15px;
            width: 200px;
            height: 35px;
        }
    }
}
.thanks {
    text-align: center;
    padding: 15%;
    font-size: 40px;
    animation-name: fade;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-duration: 4s;
    animation-direction: alternate;
    z-index: 1;
    @keyframes fade{
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }   
        100%{
            opacity: 0;
        }
    }
}

</style>