<template>
    <div class="p-2 md:p-32">
        <div class="flex justify-center text-2xl font-bold">POLITICAL PARTIES</div>
        <button v-show="!addParty" @click="addParty = !addParty" class="border-2 border-blue-400 p-3 mt-5 mb-5 rounded-md box hover:bg-blue-400 hover:text-white">Add Party</button>
        <div v-show="addParty">
            <div class="p-5 text-center" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;; width:100%">
                <input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Image Link" v-model="image"><br>
                <input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Name of Party" v-model="name"><br>
                <textarea class="h-20 w-full md:w-5/5 p-5 mb-5" placeholder="Enter Details" v-model="details"></textarea>
                <button @click="createParty()" class="box bg-blue-400 text-white w-full h-10">Submit</button>
            </div>
        </div>
        <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" class="md:p-5">
            <table style="width:100%">
                <tr class="h-10">
                    <th>#</th>
                    <th class="text-left">Image</th>
                    <th class="text-left pl-2">Party Name</th>
                    <th class="text-left" >Edit</th>
                    <th class="text-left">Delete</th>
                </tr>
                <tr class="" v-for="(party, index) in partyArray" :key="index">
                    <td>{{index + 1}}</td>
                    <td class="h-20 overflow-hidden text-center "><img class="w-full h-20 object-cover" :src="party.image"></td>
                    <td class="item-start pl-2 text-sm md:text-xl">{{party.name}}</td>
                    <td><svg @click="editParty(index)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
                    <td><svg @click="deleteParty(party.id)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from '@/firebase'
export default {
    data () {
        return {
            addParty: false,
            edit: false,
            partyArray: [],
            image: "",
            name: "",
            details: "",
            newParty: {}
        }
    },
    async mounted () {
        const querySnapshot = await getDocs(collection(db, "parties"));
        querySnapshot.forEach((doc) => {
            const party = doc.data()
            party.id = doc.id
            this.partyArray.push(party)
        })
    },
    methods: {
        async createParty () {

            this.newParty.name = this.name
            this.newParty.image = this.image
            this.newParty.details = this.details

            if (this.edit == false) {
                await addDoc(collection(db, "parties"), this.newParty)
                this.addParty = false
                window.location.reload()
            }else{
                await updateDoc(doc(db, "parties", this.id),this.newParty);
                this.addParty = false
                this.edit = false
                window.location.reload()
            }

        },
        editParty (index) {
            this.addParty = true
            this.name = this.partyArray[index].name
            this.details = this.partyArray[index].details
            this.image = this.partyArray[index].image
            this.id = this.partyArray[index].id

            this.edit = true
        },
        async deleteParty(id){
            await deleteDoc(doc(db, "parties", id));
            alert('Post has being deleted')
            window.location.reload()
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