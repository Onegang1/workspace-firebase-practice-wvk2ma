var firebaseConfig = {
  apiKey: 'AIzaSyAvgKm42YqxQUBZBvSW4ja6MuI84uO2y44',
  authDomain: 'ethancsci225.firebaseapp.com',
  projectId: 'ethancsci225',
  storageBucket: 'ethancsci225.appspot.com',
  messagingSenderId: '393850707109',
  appId: '1:393850707109:web:0649917dd9037550d2414c',
  measurementId: 'G-21TV94DY8P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  console.log(email);
  var password = $("#signup-form input[name='password']").val();
  //var cpassword = $("#signup-form input[name='cpassword']").val();
  console.log(password);
  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});


//the other choice use google account
$('#google').click(function(){
  console.log('Click google signin option');


var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log("hi");
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
})