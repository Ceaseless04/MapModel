import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyApMkcdLo04oenFNXSJsAZ406gY9Fzhypo",
    authDomain: "map-model-ab7cf.firebaseapp.com",
    projectId: "map-model-ab7cf",
    storageBucket: "map-model-ab7cf.appspot.com",
    messagingSenderId: "359414652046",
    appId: "1:359414652046:web:66e1a8fff42289bbadbddf",
    measurementId: "G-GFJVG4RMC7"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);