<template>
    <form class='login-form'>
        <!-- <label for="username">Username</label> -->
        <input id="username" name="username" type="text" placeholder='Username'>
        <!-- <label for="password">Password</label> -->
        <input id="password" name="password" type="password" placeholder='Password'>
    </form>
</template>

<style lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    input {
        width: 300px;
        height: 35px;
        border-radius: 10px;
        margin: 15px auto;
        font-size: 15px;
        padding: 3px 15px;
    }
}
</style>