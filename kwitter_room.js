
//ADD YOUR FIREBASE LINKS HERE
username1=localStorage.getItem("user_name",user_name1);
document.getElementById("name1").innerHTML="Welcome "+username1 +"!";

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBQym3FWSgVwyI2bHaSCWxbiJ0qS8GEtTg",
      authDomain: "kwitter123-7813c.firebaseapp.com",
      projectId: "kwitter123-7813c",
      storageBucket: "kwitter123-7813c.appspot.com",
      messagingSenderId: "335393842828",
      appId: "1:335393842828:web:8c06dc18c4118dc62dfda9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
