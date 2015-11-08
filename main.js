(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
})(document);

app.firebaseURL = 'https://pdash.firebaseio.com/';

var ref = new Firebase(app.firebaseURL);

app.items = [];


ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});