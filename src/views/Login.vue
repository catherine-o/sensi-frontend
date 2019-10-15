<template>
    <div class='login'>
        <!-- <h1>Please Login</h1> -->
        <LoginTabs />
        <!-- <LoginForm /> -->
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm"
import LoginTabs from "@/components/LoginTabs"
export default {
    components: {
        LoginForm,
        LoginTabs
    }
}
</script>

<style lang="scss">
.login {
    margin-top: 2%;
    text-align: center;
}
</style>