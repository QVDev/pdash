(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
})(document);

app.firebaseURL = 'https://pdash.firebaseio.com/';

var ref = new Firebase(app.firebaseURL);

app.items = [];


ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  disableSpinner();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function disableSpinner() {
  var spinners = document.querySelectorAll('paper-spinner');
  Array.prototype.forEach.call(spinners, function(spinner) {
    spinner.active = !spinner.active;
  });
}