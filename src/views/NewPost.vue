<template>
    <div class='create-post'>
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
            <button>Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input: {
                content: null
            }
        }
    },
    mounted(){
    },
    methods: {
        analyzeText(){
            
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

</style>