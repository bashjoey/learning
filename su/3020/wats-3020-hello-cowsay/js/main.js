 document.addEventListener('DOMContentLoaded', function (event) {
   let processInput = document.getElementById("process-input");
   let displayOutput = document.getElementById("display-output");


   processInput.addEventListener('click', function (event) {
     event.preventDefault();
     // ask the user for input text
     let message = document.getElementById('message');
     displayOutput.innerHTML = "Moo, " + message.value;
   });
 });