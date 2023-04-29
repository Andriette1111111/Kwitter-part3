function addUser(){
    username= document.getElementById("username").value;

    localStorage.setItem("username", username);
    window.location= "kwitter_room.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGUV4VwEqJCgj1LCjgccIeS4iPLs-KT5E",
    authDomain: "kwitter-f3f36.firebaseapp.com",
    databaseURL: "https://kwitter-f3f36-default-rtdb.firebaseio.com",
    projectId: "kwitter-f3f36",
    storageBucket: "kwitter-f3f36.appspot.com",
    messagingSenderId: "712862598495",
    appId: "1:712862598495:web:af0846ae7cccb347ace2ea"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
    document.getElementById("username").innerHTML="Hi "+ username +" !";

    
    function addRoom(){
        room_name= document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       <div>
       console.log("Room Name "+ Room_names);
       row= "<div class= 'room_name' id="+ Room_names+"onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;``
       </div>
       //End code
});});}
getData();

    function redirectToRoomName(name){
     console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
}



