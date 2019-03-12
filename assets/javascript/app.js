
$(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});

var config = {
    apiKey: "AIzaSyCH0w4RA5RZuJa7o7rqh65o29Ccxbih4dw",
    authDomain: "portfolio-c9c93.firebaseapp.com",
    databaseURL: "https://portfolio-c9c93.firebaseio.com",
    projectId: "portfolio-c9c93",
    storageBucket: "portfolio-c9c93.appspot.com",
    messagingSenderId: "667480239975"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var name = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function(event) {
    // Don't refresh the page!
    
    event.preventDefault();
  
    name = $("#nameInput")
      .val()
      .trim();
    email = $("#emailInput")
      .val()
      .trim();
    message = $("#messageInput")
      .val()
      .trim();
  
    database.ref().set({
      name: name,
      email: email,
      message: message,
      
    });
    $("#nameInput").val('');
    $("#emailInput").val('');
    $("#messageInput").val('');
    // Change what is saved in firebase
  });

//   database.ref().on("child_added", function(snapshot) {
  
//     var newContact = snapshot.val();
//     name: newContact.name;

//   })
  

  