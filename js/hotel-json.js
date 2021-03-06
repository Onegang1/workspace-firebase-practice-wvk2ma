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
/* object examples */
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    // ...
  } else {
    // User is signed out
    console.log('no user');
  }
});
$("#signout").click(function(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    //redirect the page
  }).catch((error) => {
    // An error happened.
  });
  
});
// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);

  /* save the data to database */
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var n = inputdata[i]['name'];
    var v = inputdata[i]['value'];
    console.log(n + ' ' + v);
    inputJson[n] = v;
  }
  firebase.firestore().collection('hotelreservation').add(inputJson);

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hotelreservation')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
