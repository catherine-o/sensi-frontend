<template>
    <form class='login-form'>
        <!-- <label for="username">Username</label> -->
        <input id="username" name="username" type="text" placeholder='Username'>
        <!-- <label for="password">Password</label> -->
        <input id="password" name="password" type="password" placeholder='Password'>
        <button>Submit</button>
    </form>
</template>

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
        font-family: 'Julius Sans One', sans-serif;
    }
    button {
        box-shadow: 0.5px 4px 6px 1px #b8b8b8;
    }
    button:hover {
        cursor: pointer;
        box-shadow: 0 0 0 0;
    }
}
</style>