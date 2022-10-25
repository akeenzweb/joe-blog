<template>
    <div class="p-2 md:p-32">
        <div class="flex justify-center text-2xl font-bold">DEFAULTERS</div>
        <button v-show="!addDefaulter" @click="addDefaulter = !addDefaulter" class="border-2 border-yellow-300 p-3 mt-5 mb-5 rounded-md box hover:bg-yellow-300 hover:text-white">Add Post</button>
        <div v-show="addDefaulter">
            <div class="p-5 text-center" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;; width:100%">
                <input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Name of Defaulter" v-model="name"><br>
                <!--<input class="w-full md:w-96 p-5 mb-5" type="text" placeholder="Image Link" v-model="time"><br>-->
                <textarea class="h-96 w-full md:w-5/5 p-5 mb-5" placeholder="Enter crossing details" v-model="crossings"></textarea>
                <button @click="createDefaulter()" class="box bg-yellow-300 text-white w-full h-10">Submit</button>
            </div>
        </div>
        <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;" class="md:p-5">
            <table style="width:100%">
                <tr class="h-10">
                    <th>#</th>
                    <th class="text-left">Name</th>
                    <th class="text-left pl-2">Crossings</th>
                    <th class="text-left" >Edit</th>
                    <th class="text-left">Delete</th>
                </tr>
                <tr class="" v-for="(defaulter, index) in defaultersArray" :key="index">
                    <td>{{index + 1}}</td>
                    <!--<td class="h-20 overflow-hidden text-center "><img class="w-full h-20 object-cover" :src="blog.image"></td>-->
                    <td class="item-start pl-2 text-sm md:text-xl">{{defaulter.name}}</td>
                    <td class="item-start pl-2 text-sm md:text-xl">{{defaulter.crossings}}</td>
                    <td><svg @click="editDefaulter(index)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></td>
                    <td><svg @click="deleteDefaulter(defaulter.id)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></td>
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
            addDefaulter: false,
            edit: false,
            defaultersArray: [],
            //time: null,
            //date: null,
            //image: "",
            name: "",
            //category: "",
            crossings: "",
            newDefaulter: {}
        }
    },
    async mounted () {
        const querySnapshot = await getDocs(collection(db, "defaulters"));
        querySnapshot.forEach((doc) => {
            const defaulters = doc.data()
            defaulters.id = doc.id
            this.defaultersArray.push(defaulters)
        })
    },
    methods: {
        async createDefaulter () {
            this.newDefaulter.name = this.name
            this.newDefaulter.crossings = this.crossings

            if (this.edit == false) {
                await addDoc(collection(db, "defaulters"), this.newDefaulter)
                this.addDefaulter = false
            }else{
                await updateDoc(doc(db, "defaulters", this.id),this.newDefaulter);
                this.addDefaulter = false
                this.edit = false
            }

        },
        editDefaulter (index) {
            this.addDefaulter = true
            this.name = this.defaultersArray[index].name
            this.crossings = this.defaultersArray[index].crossings
            this.id = this.defaultersArray[index].id

            this.edit = true
        },
        async deleteDefaulter(id){
            await deleteDoc(doc(db, "defaulters", id));
            alert('Post has being deleted')
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