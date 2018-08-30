import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

const config = {
    apiKey: "AIzaSyABj2BXv0kiqgKSe88yNFAIqc1sHLKBSXs",
    authDomain: "noteherder-57747.firebaseapp.com",
    databaseURL: "https://noteherder-57747.firebaseio.com",
    projectId: "noteherder-57747",
    storageBucket: "noteherder-57747.appspot.com",
    messagingSenderId: "15013136832"
  };
  firebase.initializeApp(config);

  const app = firebase.initializeApp(config)
const db = firebase.database(app)
 export default Rebase.createClass(db)