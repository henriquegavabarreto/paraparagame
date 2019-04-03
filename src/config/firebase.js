var firebase = require("firebase/app")
require("firebase/database")

var config = {
    apiKey: "AIzaSyBaptsqDSTShMb_SeHrk0A64JSq8vsiMAI",
    authDomain: "parapara-game.firebaseapp.com",
    databaseURL: "https://parapara-game.firebaseio.com",
    projectId: "parapara-game",
    storageBucket: "parapara-game.appspot.com",
    messagingSenderId: "503855722950"
  }

module.exports = firebase.initializeApp(config)
