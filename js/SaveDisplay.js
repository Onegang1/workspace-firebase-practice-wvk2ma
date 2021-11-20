// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.sampleSurvey').serializeArray();
  var inputJson = {};
  inputdata.forEach((data) => {
    inputJson[data.name] = data.value;
  });
  firebase.firestore().collection('SurveyResults').add(inputJson);
});
// update the result in table
firebase
  .firestore()
  .collection('SurveyResults')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);

    var answer1 = 0;
    var answer2 = 0;
    var answer3 = 0;
    var answer4 = 0;
    querySnapshot.forEach((doc) => {
      switch (doc.data().choice) {
        case 'A':
          answer1++;
          break;
        case 'B':
          answer2++;
          break;
        case 'C':
          answer3++;
          break;
        case 'D':
          answer4++;
          break;
      }
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
    $('#ans1').text(answer1);
    $('#ans2').text(answer2);
    $('#ans3').text(answer3);
    $('#ans4').text(answer4);
  });
