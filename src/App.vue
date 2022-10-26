<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <router-view/>
  <marquee class="marq bg-yellow-500 text-white" direction="left" width="100%">A Federal High Court sitting in Calabar has declared Bassey Otu as the governorship candidate of the All Progressives Congress in Cross River State for the 2023 election. Justice Ijeoma Ojukwu made the declaration while delivering judgment in a suit in Calabar. A member of the APC and governorship aspirant Owan Enoh is Otu’s challenger for the party’s governorship ticket. He filed a suit seeking Otu’s disqualification as the APC’s governorship candidate for the 2023 general elections. Justice Ojukwu in her ruling said the matter of determination of a governorship candidate of a political party is, and still remains the right of a political party.</marquee>
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
