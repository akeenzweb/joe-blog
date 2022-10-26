<template>
  <div class="home">
    <headerUser />

    <div class="p-5 md:p-20 ">
      <h2 class="uppercase font-bold text-2xl mb-4">Latest News</h2>
      <ul class="card-list" >
        <li @click="goToBlogLatestNews(index)" v-for="(blog,index) in latestNews" :key="index">
          <h1 class="img-box">
            <img :src="blog.image" class="object-cover w-full">
            <p class="cursor-pointer">{{blog.title}}</p>
          </h1>
        </li>

        <!--<li  @click="goToBlog()">
          <h1 class="img-box">
            <img src="../assets/images/blog1.jpg" class="block-cover">
            <p class="cursor-pointer">Easiest countries to secure a loan</p>
          </h1>
        </li>

        <li  @click="goToBlog()">
          <h1 class="img-box">
            <img src="../assets/images/blog1.jpg" class="block-cover">
            <p class="cursor-pointer">Easiest countries to secure a loan</p>
          </h1>
        </li>-->
      </ul>

      <div class="grid md:grid-cols-2">
        <div>
          <h2 class="uppercase font-bold text-2xl mb-10 mt-20">Top Trending</h2>
          <ul>
            <li class="flex justify-between mb-10"  @click="goToBlogTopTrending(index)" v-for="(blog,index) in topTrending" :key="index">
              <table>
                <tr class="flex">
                  <td><h2 class="img-box2"><img :src="blog.image" class="object-cover"></h2></td>
                  <td>
                    <h3 class=" text-gray-700 uppercase cursor-pointer">{{blog.title}}</h3><br>
                    <h3>{{blog.time}}</h3>
                  </td>
                </tr>
              </table>
            </li>

            <!--<li class="flex justify-between mb-10"  @click="goToBlog()">
              <table>
                <tr class="flex">
                  <td><h2 class="img-box2"><img src="../assets/images/blog1.jpg" class="block-cover"></h2></td>
                  <td>
                    <h3 class=" text-gray-700 uppercase cursor-pointer">Easiest countries to secure a loan</h3><br>
                    <h3>20/11/22</h3>
                  </td>
                </tr>
              </table>
            </li>

            <li class="flex justify-between mb-10"  @click="goToBlog()">
              <table>
                <tr class="flex">
                  <td><h2 class="img-box2"><img src="../assets/images/blog1.jpg" class="block-cover"></h2></td>
                  <td>
                    <h3 class=" text-gray-700 uppercase cursor-pointer">Easiest countries to secure a loan</h3><br>
                    <h3>20/11/22</h3>
                  </td>
                </tr>
              </table>
            </li>-->
          </ul>
        </div>

        <div>
          <h2 class="uppercase font-bold text-2xl mb-4 mt-20">Periods of Crossing</h2>
          <barChart />

        </div>
      </div>
    </div>
    <footerUser />
  </div>
</template>

<script>
import headerUser from '../components/user/headerUser.vue'
import barChart from '../components/user/barChart.vue'
import footerUser from '../components/user/footerUser.vue'

import { collection, getDocs } from "firebase/firestore"
import { db } from '@/firebase'

export default {
  name: 'HomeView',
  data () {
    return {
      allBlogPost: [

      ],
      latestNews: [],
      topTrending: []
    }
  },
  async mounted () {
    //This gets the data from firestore
    const querySnapshot = await getDocs(collection(db, "blog"));
    querySnapshot.forEach((doc) => {
        const blog = doc.data()
        //console.log("menu = ", menu)
        this.allBlogPost.push(blog)
    })
    //This filters the allBlogPost caegory and creates a new array that has a categoty of Latest News
    this.latestNews = this.allBlogPost.filter(m => m.category == 'Latest News')
    //This filters the allBlogPost caegory and creates a new array that has a categoty of Top Trending
    this.topTrending = this.allBlogPost.filter(m => m.category == 'Top Trending')
    console.log(this.topTrending)
  },
  components: {
    headerUser,
    barChart,
    footerUser
  },
  methods: {
    goToBlogLatestNews (index) {
      this.$store.commit("selectBlog", this.latestNews[index])
      localStorage.setItem("selectedBlog", JSON.stringify(this.latestNews[index]));
      this.$router.push('/blog')
    },
    goToBlogTopTrending (index) {
      this.$store.commit("selectBlog", this.topTrending[index])
      localStorage.setItem("selectedBlog", JSON.stringify(this.topTrending[index]));
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@300;500;600&display=swap');
@import url('http://fonts.cdnfonts.com/css/euclid-circular-a');
.home {
  overflow-x: hidden;
  font-family: 'Euclid Circular A';
}
.img-box {
  width: 450px;
  height: 600px;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.img-box img {
  height: 600px;
}
.img-box p {
  position: absolute;
  color: white;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card-list {
  overflow-x: scroll;
  display: flex;
}
.card-list li {
  margin-right: 5px;
}
.card {
  width: 450px;
  height: 600px;
}
::-webkit-scrollbar {
    width: 5px;
    height: 7px;
    }

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}
  ::-webkit-scrollbar-thumb {
  background: rgb(241, 179, 7);
  border-radius: 5px;
}
.img-box2 {
  width: 150px;
  height: 150px;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-right: 10px;
  /*border: 5px solid red;*/
}
.img-box2 img {
  width: 100%;
  height: 150px;
  margin: auto;
}


@media screen and (max-width: 425px) {
  /*.card {
    width: 200px;
    height: 300px;
  }*/
  .img-box {
    width: 200px;
    height: 300px;
  }
  .img-box2 {
    width: 100px;
    height: 100px;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    }
}
</style>
