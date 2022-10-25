<template>
    <div class="p-2 md:p-20">
        <div class="mb-5 text-center font-bold text-4xl">Manage your space</div>
        <div class="flex justify-center text-center">
            <div @click="blog()" class="box w-60 h-60 rounded-lg m-2 bg-pink-600 text-white flex justify-center items-center text-2xl md:text-4xl"><b class="cursor-pointer">Blog</b></div>
            <div @click="party()" class="box w-60 h-60 rounded-lg m-2 bg-blue-400 text-white flex justify-center items-center text-2xl md:text-4xl"><b class="cursor-pointer">Party</b></div>
        </div>
        <div class="flex justify-center text-center">
            <div @click="defaulters()" class="box w-60 h-60 rounded-lg m-2 bg-yellow-300 text-white flex justify-center items-center text-2xl md:text-4xl"><b class="cursor-pointer">Defaulters</b></div>
            <div class="box w-60 h-60 rounded-lg m-2 bg-green-400 text-white flex justify-center items-center text-2xl md:text-4xl"><b class="cursor-pointer">Chart</b></div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        blog () {
            this.$router.push('/admin/blog')
        },
        party () {
            this.$router.push('/admin/party')
        },
        defaulters () {
            this.$router.push('/admin/defaulters')
        }
    }
}
</script>


<style scoped>

.box {
    transition: all 0.4s ease;
}
.box:hover {
    transform: scale(1.02);
    transition: all 0.4s ease;
}

</style>