<template>
    <div class='login-tabs'>
        <div class='tab-2'>
            <label for='tab2-1' @click='selectTab'>Login</label>
            <input id='tab-2-1' name='tabs-two' type='radio' checked='checked'>
            <div>
                <LoginForm />
            </div>
        </div>
        <div class='tab-2'>
            <label for='tab2-2' @click='selectTab'>New User</label>
            <input id='tab-2-2' name='tabs-two' type='radio'>
            <div>
                <p>Create Form Here</p>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from './LoginForm'
export default {
    components: {
        LoginForm
    },
    methods: {
        selectTab(){
            (event.target.nextSibling).checked = true
        }
    }
}
</script>

<style lang="scss">
.login-tabs {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin: 0 25%;
}
.login-tabs [class^="tab"] label,
.login-tabs [class*=" tab"] label {
    cursor: pointer;
    display: block;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1em;
    padding: 2rem 0;
    width: 30%;
    margin: auto;
}
.login-tabs [class^="tab"] [type="radio"],
.login-tabs [class*=" tab"] [type="radio"] {
    border-bottom: 1px solid rgb(239, 237, 239);
    cursor: pointer;
    appearance: none;
    display: block;
    margin: auto;
    width: 100%;
    transition: all 0.3s ease-in-out; 
}
.login-tabs [class^="tab"] [type="radio"]:hover, 
.login-tabs [class^="tab"] [type="radio"]:focus,
.login-tabs [class*=" tab"] [type="radio"]:hover,
.login-tabs [class*=" tab"] [type="radio"]:focus {
    border-bottom: 1px solid #26a7fd; 
}
.login-tabs [class^="tab"] [type="radio"]:checked,
.login-tabs [class*=" tab"] [type="radio"]:checked {
    border-bottom: 2px solid #26a7fd; 
}
.login-tabs [class^="tab"] [type="radio"]:checked + div,
.login-tabs [class*=" tab"] [type="radio"]:checked + div {
    opacity: 1; 
}
.login-tabs [class^="tab"] [type="radio"] + div,
.login-tabs [class*=" tab"] [type="radio"] + div {
    display: block;
    opacity: 0;
    padding: 3rem 0;
    width: 80%;
    transition: all 0.3s ease-in-out; 
}
.login-tabs .tab-2 {
    width: 50%; 
}
.login-tabs .tab-2 [type="radio"] + div {
    width: 200%;
    margin-left: 200%; 
}
.login-tabs .tab-2 [type="radio"]:checked + div {
    margin-left: 0; 
}
.login-tabs .tab-2:last-child [type="radio"] + div {
    margin-left: 100%; 
}
.login-tabs .tab-2:last-child [type="radio"]:checked + div {
    margin-left: -100%; 
}
</style>