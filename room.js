const firebaseConfig = {
    apiKey: "AIzaSyABg6Qnbn1VULh0ih0TUejcCHQLRTEWWs8",
    authDomain: "kwiter-4e167.firebaseapp.com",
    databaseURL: "https://kwiter-4e167-default-rtdb.firebaseio.com",
    projectId: "kwiter-4e167",
    storageBucket: "kwiter-4e167.appspot.com",
    messagingSenderId: "621163420350",
    appId: "1:621163420350:web:883521165c3f38ddf09cef",
    measurementId: "G-L6VV92PYRK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
