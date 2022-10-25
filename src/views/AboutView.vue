<template>
  <div class="about">
    <headerUser />
    <div class="flex justify-center"><h1 class="text-2xl mb-5">List Of Political Parties</h1></div>

    <div class="md:grid md:grid-cols-6">
      <div></div>
      <div class="md:col-span-4 table-block">
        <table class="md:table-auto mb-8 " style="width:100%">
          <thead>
            <tr class="h-5 text-left">
              <th>#</th>
              <th class="hide">Image</th>
              <th>Party Name</th>
              <th>Party Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(party, index) in partyDetails" :key="index">
              <td class="p-5">{{index + 1}}</td>
              <td class="p-5 h-20 overflow-hidden text-center hide"><img class="w-full h-20" :src="party.image" ></td>
              <td class="p-5">{{party.name}}</td>
              <td class="p-5">{{party.details}}</td>
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
      partyDetails: [
        //{
        //  name: 'Peoples Democratic Party',
        //  image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
        //  details: 'This is a party'
        //}
      ]
    }
  },
  async mounted () {
    const querySnapshot = await getDocs(collection(db, "parties"));
    querySnapshot.forEach((doc) => {
        const party = doc.data()
        this.partyDetails.push(party)
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
