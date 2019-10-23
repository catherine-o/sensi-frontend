<template>
  <div id="app">
    <fullscreen ref="fullscreen" @change="fullscreenChange">
    <header>
      <div class='nav'>
        <h1>Sensi</h1>
        <h4 @click='routeToProfile'>Profile</h4>
        <h4 @click='routeToNewPost'>New Post</h4>
        <h4 @click='routeToStart'>Logout</h4>
      </div>
      <h1 class='views' @click='routeToSmile'>Views</h1>
    </header>
    <main>
      <router-view />
    </main>
    </fullscreen>
    <button type="button" @click="toggle" >Fullscreen</button>
  </div>
</template>

<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)
export default {
  data(){
    return {
      fullscreen: false
    }
  },
  methods: {
    routeToProfile(){
      (!this.$store.state.user.posts)
        ? alert('Please create an entry to continue :)')
        : this.$router.push({ path: 'profile'})
    },
    routeToStart(){
      this.$router.push({ path: 'start' })
      localStorage.clear()
    },
    routeToNewPost(){
      this.$router.push({ path: 'newpost' })
    },
    routeToSmile(){
      this.$router.push({ path: 'smile' })
    },
    toggle(){
      this.$refs['fullscreen'].toggle()
    },
    fullscreenChange(fullscreen){
      this.fullscreen = fullscreen
    }
  }
}
</script>

<style lang="scss">
  #app {
    // padding-top: 35px;
    font-family: 'Julius Sans One', sans-serif;
    color: rgb(166, 171, 173);
    :fullscreen{
      background-color: white !important;
      padding: 15px 4%;
      @media only screen and (min-width: 1500px){
        padding: 3% 4%;
      }
    }
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 4%;
      .nav {
        display: inline-flex;
      }
      .nav:hover h4 {
        opacity: 1;
        visibility: visible;
      }
      h4 {
        transition: 1s ease-in-out;
        opacity: 0;
        visibility: hidden;
        margin: 35px 0 0 30px;
      }
      h4:hover {
        text-decoration: underline;
      }
      .views:hover {
        color: #26a7fd;
      }
    }
  }
</style>
