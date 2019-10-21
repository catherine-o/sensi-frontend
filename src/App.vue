<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Julius Sans One', sans-serif;
    color: rgb(166, 171, 173);
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 4%;
      .nav {
        display: inline-flex;
      }
      .nav:hover h4 {
        visibility: visible;
      }
      h4 {
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
