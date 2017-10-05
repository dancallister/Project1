


// https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCysHlhZT_Z8d_weNcd8saVpB2DXlStK2Y",
    authDomain: "project-practice-a8df8.firebaseapp.com",
    databaseURL: "https://project-practice-a8df8.firebaseio.com",
    projectId: "project-practice-a8df8",
    storageBucket: "project-practice-a8df8.appspot.com",
    messagingSenderId: "869800553131"
  };
  
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Users
$("#add-user-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var userName = $("#name").val().trim();
  var userHandle = $("#twitter").val().trim();
  var userAddress = $("#streetAddress").val().trim();
  var userZipCode = $("#zipCode").val().trim();

  // Creates local "temporary" object for holding employee data
  var newUser = {
    name: userName,
    handle: userHandle,
    streetAddress: userAddress,
    zipCode: userZipCode, 
  };

  // Uploads employee data to the database
  database.ref().push(newUser);

  // Logs everything to console
  console.log(newUser.name);
  console.log(newUser.handle);
  console.log(newUser.streetAddress);
  console.log(newUser.zipCode);

  // Clears input boxes
  $("#name").val("");
  $("#twitter").val("");
  $("#streetAddress").val("");
  $("#zipCode").val("");

 });

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	console.log(childSnapshot.val());

	var userName = childSnapshot.val().name;
  	var userHandle = childSnapshot.val().handle;
  	var userAddress = childSnapshot.val().streetAddress;
  	var userZipCode = childSnapshot.val().zipCode;

  	$("#users-table > tbody").append("<tr><td>" + userName + "</td><td>" + userHandle + "</td><td>" + userAddress + "</td><td>" + userZipCode + "</td></tr>");


  	 $("#add-timeline-btn").on("click", function(event) {

  	 	twttr.widgets.createTimeline(
  			{
    		sourceType: 'profile',
    		screenName: userHandle
  			},
  		document.getElementById('timeline'),
  		{
    		width: '100%',
    		height: '450',
    		related: 'twitterdev,twitterapi'
  		}).then(function (el) {
    		console.log('Embedded a timeline.')
  		});
  	});
});

















