import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFDpZ1kMZDDlW6p5vLEjxDnY9kCyPnlcE",
  authDomain: "restaurantapp-4e40e.firebaseapp.com",
  databaseURL: "https://restaurantapp-4e40e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-4e40e",
  storageBucket: "restaurantapp-4e40e.appspot.com",
  messagingSenderId: "174416156605",
  appId: "1:735936720860:web:ad4a83c65927dd1795e919"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
