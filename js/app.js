// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6rmt5FO6KsGLD_MWhFyyn5xdMgDHSW24",
    authDomain: "practicando-firebase.firebaseapp.com",
    databaseURL: "https://practicando-firebase.firebaseio.com",
    projectId: "practicando-firebase",
    storageBucket: "practicando-firebase.appspot.com",
    messagingSenderId: "178923092805"
  };
  firebase.initializeApp(config);

$('#buttonGoogle').click(function () {
authGoogle();
})

function authGoogle() {
var provider = new firebase.auth.GoogleAuthProvider();
authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    console.log(error);
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
    // ...
  });
}

var title = $('#title');

var dataBase = firebase.database().ref().child('titulo');

dataBase.on('value',function (snapshot) {
  $title.text(snapshot.val());
});
