import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuFmU5bFfAm2QdMH36zAAjx_HOuTsX8gY",
    authDomain: "very-hot-burgers-fa49b.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-fa49b-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
