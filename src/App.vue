<template>
  <div id="app">
    <header>
      <h1 class='nav'>Sensi</h1>
      <h1>Views</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Julius Sans One', sans-serif;
    color: rgb(166, 171, 173);
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 4%;
    }
  }
</style>
