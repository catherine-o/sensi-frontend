<template>
    <div class='login'>
        <LoginTabs />
    </div>
</template>

<script>
import LoginTabs from "@/components/LoginTabs"
export default {
    components: {
        LoginTabs
    },
    methods: {
        createUser(user){
            this.$emit("createUser", user)
        }
    }
}
</script>

<style lang="scss">
.login {
    margin-top: 2%;
    text-align: center;
}
</style>