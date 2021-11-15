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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $("#signin-form input[name='username']").val();
  var password = $("#signin-form input[name='password']").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
