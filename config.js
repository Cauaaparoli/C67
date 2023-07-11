import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf3cYqFGRCiwgvHpahci4VJc7fGQP07BQ",
  authDomain: "pro67-b3b01.firebaseapp.com",
  projectId: "pro67-b3b01",
  storageBucket: "pro67-b3b01.appspot.com",
  messagingSenderId: "302718421468",
  appId: "1:302718421468:web:9480308e41b1382b146719"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();