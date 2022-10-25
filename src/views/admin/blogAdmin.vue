<template>
    <div class="p-2 md:p-32">
        <button v-show="!addBlog" @click="addBlog = !addBlog" class="border-2 border-pink-700 p-3 mt-5 mb-5 rounded-md box hover:bg-pink-700 hover:text-white">Add Post</button>
        <div v-show="addBlog">
            <div class="p-5 text-center" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;; width:100%">
                <input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Image Link" v-model="image"><br>
                <input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Title" v-model="title"><br>
                <select class="w-full md:w-96 p-5 mb-5 text-black" v-model="category" required>
                    <option value="" disabled selected>Category</option>
                    <option value="Latest News">Latest News</option>
                    <option value="Top Trending">Top Trending</option>
                </select><br>
                <!--<input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Image Link" v-model="time"><br>-->
                <textarea class="h-96 w-full md:w-5/5 p-5 mb-5" placeholder="Enter Post" v-model="post"></textarea>
                <button @click="postBlog()" class="box bg-pink-700 text-white w-full h-10">Submit</button>
            </div>
        </div>
        <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" class="md:p-5">
            <table style="width:100%">
                <tr class="h-10">
                    <th>#</th>
                    <th class="text-left">Image</th>
                    <th class="text-left pl-2">Title</th>
                    <th class="text-left">Edit</th>
                    <th class="text-left">Delete</th>
                </tr>
                <tr class="" v-for="(blog, index) in blogArray" :key="index">
                    <td>{{index + 1}}</td>
                    <td class="h-20 overflow-hidden text-center "><img class="w-full h-20 object-cover" :src="blog.image"></td>
                    <td class="item-start pl-2 text-sm md:text-xl">{{blog.title}}</td>
                    <td><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
                    <td><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from '@/firebase'
export default {
    data () {
        return {
            addBlog: false,
            blogArray: [],
            time: null,
            date: null,
            image: "",
            title: "",
            category: "",
            post: "",
            newPost: {}
        }
    },
    async mounted () {
        const querySnapshot = await getDocs(collection(db, "blog"));
        querySnapshot.forEach((doc) => {
            const blog = doc.data()
            blog.id = doc.id
            this.blogArray.push(blog)
        })
    },
    methods: {
        async postBlog () {
            //The code below gets the current time
            var date = new Date()
            var h = date.getHours()
            var m = date.getMinutes()
            var s = date.getSeconds()
            this.time = h + ":" + m + ":" + s

            var day = date.getDate()
            var month = date.getMonth()+1
            var year = date.getFullYear()
            this.date = day + "/" + month + "/" + year

            this.newPost.title = this.title
            this.newPost.image = this.image
            this.newPost.category = this.category
            this.newPost.post = this.post
            this.newPost.time = this.time + '' + this.date

            await addDoc(collection(db, "blog"), this.newPost)
            this.addBlog = false
        }
    }
}
</script>

<style scoped>

td {
    padding-bottom: 5px;
}
.box {
    transition: all 0.4s ease;
}
.box:hover {
    transform: scale(1.02);
    transition: all 0.4s ease;
}
input, select {
    height: 45px;
    border: 1px solid rgb(187, 187, 187)
}
select {
    color: black;
    /*background: aqua;*/
}
textarea {
    border: 1px solid rgb(187, 187, 187)
}

</style>