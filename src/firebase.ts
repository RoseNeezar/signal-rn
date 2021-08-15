import {
  APIKEY,
  APPID,
  AUTHDOMAIN,
  MESSAGINGSENDERID,
  PROJECTID,
  STORAGEBUCKET,
} from "@env";
import * as firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

let app;

if (firebase.default.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig);
} else {
  app = firebase.default.app();
}

const db = app.firestore();
const auth = firebase.default.auth();

export { db, auth };
