<template>
    <form class='create-user-form' @submit.prevent='createUser'>
        <input id="create-username" ref="username" type="text" placeholder='Username'>
        <input id="create-name" ref="name" type="text" placeholder='Name'>
        <input id="create-password" ref="password" type="password" placeholder='Password'>
        <input id="password-confirm" ref="password-confirm" type="password" placeholder='Confirm Password'>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    methods: {
        createUser(){
            this.$store.dispatch("createUser", this.getFormValues())
        },
        getFormValues(){
            this.output = {
                username: this.$refs.username.value,
                name: this.$refs.name.value,
                password: this.$refs.password.value
            }
            return this.output
        }
    }
}
</script>

<style lang="scss">
.create-user-form {
    display: flex;
    flex-direction: column;
    input, button {
        width: 300px;
        height: 35px;
        border-radius: 10px;
        margin: 0 auto 18px auto;
        font-size: 15px;
        padding: 3px 15px;
        font-family: 'Julius Sans One', sans-serif;
    }
    button {
        box-shadow: 0.5px 4px 6px 1px #b8b8b8;
        margin-top: 15px;
    }
    button:hover {
        cursor: pointer;
        box-shadow: 0 0 0 0;
        background-color: #26a7fd13;
        margin-top: 15px;
    }
}
</style>