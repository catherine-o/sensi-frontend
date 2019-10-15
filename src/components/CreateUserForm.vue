<template>
    <form class='create-user-form'>
        <input id="username" name="username" type="text" placeholder='Username'>
        <input id="name" name="name" type="text" placeholder='Name'>
        <input id="password" name="password" type="password" placeholder='Password'>
        <input id="password" name="password" type="password" placeholder='Confirm Password'>
        <button>Submit</button>
    </form>
</template>

<style lang="scss">
.create-user-form {
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
        background-color: #26a7fd13;
    }
}
</style>