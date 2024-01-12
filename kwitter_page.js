//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyASCTj-EJt9VdUXP-X1UbCuDEkzky-YFxM",

      authDomain: "kwitter3-b54ea.firebaseapp.com",
    
      databaseURL: "https://kwitter3-b54ea-default-rtdb.firebaseio.com",
    
      projectId: "kwitter3-b54ea",
    
      storageBucket: "kwitter3-b54ea.appspot.com",
    
      messagingSenderId: "714345898051",
    
      appId: "1:714345898051:web:bae3cbf36d73a1b98434f6"
    
    };
    
    
    // Initialize Firebase
    
      firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      }); 
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
