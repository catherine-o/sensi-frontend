<template>
    <div>
        <form class='create-user-form' @submit.prevent='getFormValues'>
            <input id='create-username' v-model='input.username' type='text' placeholder='Username'>
            <input id='create-name' v-model='input.name' type='text' placeholder='Name'>
            <input id='create-password' v-model='input.password' type='password' placeholder='Password'>
            <input id='password-confirm' v-model='input.passwordConfirm' type='password' placeholder='Confirm Password'>
            <button>Submit</button>
        </form>
        <p>{{ input.message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: {
                username: null,
                name: null,
                password: null,
                passwordConfirm: null,
                message: null
            }
        }
    },
    methods: {
        createUser(user){
            this.$store.dispatch('createUser', user)
            this.input.message = 'Success!'
        },
        getFormValues(){
            let userInfo = null
            this.input.username && this.input.name && this.input.password
            ? (this.input.password == this.input.passwordConfirm)
                ? userInfo = {
                    username: this.input.username,
                    name: this.input.name,
                    password: this.input.password
                }
                : this.input.message = ('Passwords do not match')
            : this.input.message = ('Please fill in all fields')
            if (userInfo) { this.createUser(userInfo) }
        }
    }
}
</script>

<style lang='scss'>
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
        font-family: 'Titillium Web', sans-serif;
    }
    button {
        margin-top: 15px;
    }
    button:hover {
        cursor: pointer;
        background-color: #26a7fd13;
        margin-top: 15px;
    }
}
</style>