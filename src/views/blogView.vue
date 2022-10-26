<template>
    <div>
        <headerUser />
        <div  class="grid md:grid-cols-5 p-5 md:p-20">
            <div class="col-span-3" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;">
                <h1 class="uppercase text-2xl p-4"><b>{{blog.title}}</b></h1>
                <div class="text-center overflow-hidden h-64"><img class="object-cover w-full h-64" :src="blog.image"></div>
                <div class="p-4">
                    <h5>{{blog.post}}</h5>
                </div>
            </div>
            <div class="col-span-3 md:col-span-2 p-5 w-full">
                <h1 class="uppercase font-bold mb-6">Related Articles</h1>
                <ul>
                    <li class="cursor-pointer mb-4 " v-for="(blog,index) in relatedArticle" :key="index" @click="goToBlog(index)">
                        <div class="grid grid-cols-4 p-2 rounded-4 card" style="box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
                            <div class="overflow-hidden text-center h-20"><img class="w-full h-20 object-cover" :src="blog.image"></div>
                            <div class="col-span-3 ml-4">
                                <h1>{{blog.title}}</h1>
                                <h3 class="text-xs">{{blog.time}}</h3>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footerUser />
    </div>
</template>
<script>
import headerUser from '../components/user/headerUser.vue'
import footerUser from '../components/user/footerUser.vue'

import { collection, getDocs } from "firebase/firestore"
import { db } from '@/firebase'

export default {
  name: 'HomeView',
  data () {
    return {
      allBlogPost: [

      ],
      blog: {},
      relatedArticle: [],
      relatedArticleFilter1: [],
      selectedBlogTitle: null,
      selectedBlogCategory: null
    }
  },
  components: {
    headerUser,
    footerUser
  },
  async mounted () {
    //This gets the data from firestore
    const querySnapshot = await getDocs(collection(db, "blog"));
    querySnapshot.forEach((doc) => {
        const blog = doc.data()
        this.allBlogPost.push(blog)
    })

    //This gets the blog stores  in the localstorage
    this.blog = JSON.parse(localStorage.getItem("selectedBlog"))
    this.selectedBlogCategory = this.blog.category;

    this.selectedBlogTitle = this.blog.title
    //This selects the array with the given category
    this.relatedArticleFilter1 = this.allBlogPost.filter(m => m.category == this.selectedBlogCategory)
    //This removes the current blog post fromthe related blog
    this.relatedArticle = this.relatedArticleFilter1.filter(m => m.title != this.selectedBlogTitle)
    console.log("related Article Filter1 =", this.relatedArticleFilter1)
    console.log("related Article =", this.relatedArticle)
  },
  methods: {
    goToBlog (index) {
      this.$store.commit("selectBlog", this.relatedArticle[index])
      localStorage.setItem("selectedBlog", JSON.stringify(this.relatedArticle[index]));
      window.location.reload()
      //this.$router.push('/blog')
    },
  }
}
</script>

<style scoped>
li {
    transition: all 0.4s ease;
}
li:hover {
    transform: scale(1.02);
    transition: all 0.4s ease;
}
.card {
    border-radius: 8px;
}

</style>