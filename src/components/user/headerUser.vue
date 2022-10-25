<template>
    <div class="p-5">
        <div class="navigation">
            <div class="flex justify-between items-center bg-white head">
                <h2 class="text-2xl font-bold text-yellow-500">Joey Media</h2>
                <span class=" md:hidden"><i @click="menubar = !menubar" class="fa fa-bars fa-2x" aria-hidden="true"></i></span>
            </div>
            <ul class="md:flex justify-around py-3 text-lg menu-desktop">
                <router-link to="/"><li class="text-gold-400 block md:inline-block border-b-2 border-yellow-600">Home</li></router-link>
                <router-link to="/about"><li :class="route === '/about' ? 'active' : 'not-active' " class="block md:inline-block">Political Parties</li></router-link>
                <router-link to="/defaulters"><li class="block md:inline-block">Defaulters</li></router-link>
                <li class="block md:inline-block">Chart</li>
            </ul>

            <transition name="menu">
                <ul v-show="menubar" class="md:flex justify-around py-3 text-lg menu-mobile z-[-1]">
                    <router-link to="/"><li class="text-gold-400 block md:inline-block mb-2 border-b-2 border-yellow-500">Home</li></router-link>
                    <router-link to="/about"><li class="block md:inline-block mb-2">Political Parties</li></router-link>
                    <router-link to="/defaulters"><li class="block md:inline-block mb-2">Defaulters</li></router-link>
                    <li class="block md:inline-block mb-2">Chart</li>
                </ul>
            </transition>

        </div>
        <hr class="mt-5">

    </div>
</template>

<script>
export default {
    data () {
        return {
            menubar: false
        }
    }
}

</script>

<style>
* {
    padding: 0px;
    margin: 0px;
}
.active {
    border-bottom: 2px solid gold
}
.menu-mobile {
    display: none;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-450px);
}
.menu-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.menu-enter-active {
  transition: all 0.8s ease;
}

.menu-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.menu-leave-to {
  opacity: 0;
  transform: translateY(-450px);
}
.menu-leave-active {
  transition: all 0.8s ease;
}
@media screen and (max-width:425px) {
    .menu-mobile {
        display: block;
    }
    .menu-desktop {
        display: none;
    }
}
</style>