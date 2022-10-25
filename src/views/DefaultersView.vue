<template>
  <div class="about">
    <headerUser />
    <div class="flex justify-center"><h1 class="text-2xl mb-5">List Of Defaulters</h1></div>

    <div class="md:grid md:grid-cols-6">
      <div></div>
      <div class="md:col-span-4 table-block">
        <table class="md:table-auto mb-8 " style="width:100%">
          <thead>
            <tr class="h-5 text-left">
              <th>#</th>
              <th>Name</th>
              <th>Crossings</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(defaulter, index) in defaultersArrays" :key="index">
              <td class="p-5">{{index + 1}}</td>
              <td class="p-5">{{defaulter.name}}</td>
              <td class="p-5">{{defaulter.crossings}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
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
  components: {
    headerUser,
    footerUser
  },
  data () {
    return {
      defaultersArrays: [

      ]
    }
  },
  async mounted () {
    const querySnapshot = await getDocs(collection(db, "defaulters"));
    querySnapshot.forEach((doc) => {
        const defaulters = doc.data()
        this.defaultersArrays.push(defaulters)
    })
  }
}
</script>

<style scoped>
th, td {

  height: 50px;
}
td {
  padding-bottom: 5px;
}
@media screen and (max-width:628px) {
  .table-block {
    overflow-x: scroll;
  }
  .hide {
    display: none;
  }
}
</style>
