<template>
    <div class="about">
      <headerUser />
      <div class="flex justify-center"><h1 class="text-2xl mb-5">List Of Defaulters</h1></div>

      <div class="grid md:grid-cols-4">
        <div></div>
        <div class="col-span-2">
          <table class="table-auto" style="width:100%">
            <thead>
              <tr class="h-5 text-left">
                <th>#</th>
                <th>Image</th>
                <th>Party Name</th>
                <th>Party Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(party, index) in partyDetails" :key="index">
                <td>{{index + 1}}</td>
                <td><img :src="party.image" style="height:50px;width:50px"></td>
                <td>{{party.name}}</td>
                <td>{{party.details}}</td>
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

  export default {
    name: 'HomeView',
    components: {
      headerUser,
      footerUser
    },
    data () {
      return {
        partyDetails: [
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          },
          {
            name: 'Peoples Democratic Party',
            image: 'https://i.im.ge/2022/10/07/1J2H0C.dr5.png',
            details: 'This is a party'
          }
        ]
      }
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
  </style>
