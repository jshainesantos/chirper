import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8GSVT0o5rNd0AVwmJrtgVy2UT-BmUovw",
  authDomain: "chirper-f4a5c.firebaseapp.com",
  projectId: "chirper-f4a5c",
  storageBucket: "chirper-f4a5c.appspot.com",
  messagingSenderId: "388698221718",
  appId: "1:388698221718:web:f246008cda119be48de6b7"
};

const app = initializeApp(firebaseConfig);

export default app;