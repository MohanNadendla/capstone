
//ADD YOUR FIREBASE LINKS HERE
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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"
  
  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("Room_name-"+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomNames(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
        //End code
        });});}
  getData();
  
  function redirectToRoomNames(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
  }
