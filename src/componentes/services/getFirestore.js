import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuy1ibD39r8RY8902oLIhNDdmFKKNxoYY",
  authDomain: "react-pagina-mangas.firebaseapp.com",
  projectId: "react-pagina-mangas",
  storageBucket: "react-pagina-mangas.appspot.com",
  messagingSenderId: "445909589965",
  appId: "1:445909589965:web:eb9f04715116c41e702e84",
};

const app = firebase.initializeApp(firebaseConfig);

// export function getFirebase(){
//     return app
// }

export function getFirestore() {
  return firebase.firestore(app);
}
