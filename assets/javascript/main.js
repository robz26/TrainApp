// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6MXaIwL1iBNRTGKp6AzpK6c_uOQU5flI",
    authDomain: "trainapp-204f4.firebaseapp.com",
    databaseURL: "https://trainapp-204f4.firebaseio.com",
    projectId: "trainapp-204f4",
    storageBucket: "trainapp-204f4.appspot.com",
    messagingSenderId: "69042343217"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  
  $('#submit').on('click', function (event) {
      event.preventDefault();
      $('.newRow').remove();
      var TrainName = $('#name').val().trim();
      var Destination = $('#destination').val().trim();
      var StartTime = $('#starttime').val().trim();
      var Frequency = $('#frequency').val().trim();

      database.ref('TrainData').push({
          TrainName: TrainName,
          Destination: Destination,
          StartTime: StartTime,
          Frequency: Frequency
      });
      
      database.ref('TrainData').on('child_added', function(childSnapshot, prevChildkey){
        
        console.log(childSnapshot.val());
        console.log(childSnapshot.val().TrainName);
        
      var NewRow = $('<tr>').addClass('newRow');
      $('.thead-dark').append(NewRow);
      NewRow.append($('<td>').text(childSnapshot.val().TrainName));
      NewRow.append($('<td>').text(childSnapshot.val().Destination));
      NewRow.append($('<td>').text(childSnapshot.val().Frequency));
      });
      
  })