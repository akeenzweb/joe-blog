
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAFPb7Yil5yGmfU790I1hY591qPPFzk7bs",
    authDomain: "joseph-blog-60445.firebaseapp.com",
    projectId: "joseph-blog-60445",
    storageBucket: "joseph-blog-60445.appspot.com",
    messagingSenderId: "830555376667",
    appId: "1:830555376667:web:5212c454901c117e5bfcbe"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}