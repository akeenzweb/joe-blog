<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <router-view/>
  <marquee class="marq bg-yellow-500 text-white" direction="left" width="100%">"I’d been hightailed to the operating room, where my detonated fallopian tube, along with the embryo inside it, was removed, saving my life."BY LINDSEY LANGE-ABRAMOWITZ, GUEST WRITER</marquee>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.marq {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
