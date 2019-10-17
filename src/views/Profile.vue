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
    }
}
</script>

<style lang="scss">
.create-post {
    text-align: center;
    font-size: 20px;
    padding: 8%;
    #content {
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 20px;
    }
}

</style>