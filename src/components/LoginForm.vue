<template>
    <div>
        <form class='login-form' @submit.prevent='getFormValues'>
            <input id='username' v-model='input.username' type='text' placeholder='Username'>
            <input id='password' v-model='input.password' type='password' placeholder='Password'>
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
                password: null,
                message: null
            }
        }
    },
    methods: {
        loginUser(user){
            this.$store.dispatch('loginUser', user)
            this.input.message = 'Loading...'
        },
        getFormValues(){
            let userInfo = null
            this.input.username && this.input.password
            ? userInfo = {
                username: this.input.username,
                password: this.input.password
            }  
            : this.input.message = 'Please fill in all fields'
            if (userInfo) { this.loginUser(userInfo) }
        }
    }
}
</script>

<style lang='scss'>
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
    button:hover {
        cursor: pointer;
        background-color: #26a7fd13;
    }
}
</style>