<template>
    <form class='login-form' @submit.prevent='loginUser'>
        <input id="username" ref="username" type="text" placeholder='Username'>
        <input id="password" ref="password" type="password" placeholder='Password'>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    methods: {
        loginUser(){
            this.$store.dispatch("loginUser", this.getFormValues())
        },
        getFormValues(){
            this.output = {
                username: this.$refs.username.value,
                password: this.$refs.password.value
            }
            return this.output
        }
    }
}
</script>

<style lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    input, button {
        width: 300px;
        height: 35px;
        border-radius: 10px;
        margin: 15px auto;
        font-size: 15px;
        padding: 3px 15px;
        font-family: 'Titillium Web', sans-serif;
    }
    button {
        box-shadow: 0.5px 4px 6px 1px #b8b8b8;
    }
    button:hover {
        cursor: pointer;
        box-shadow: 0 0 0 0;
        background-color: #26a7fd13;
    }
}
</style>