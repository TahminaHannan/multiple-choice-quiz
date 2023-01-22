// Selects element by class
const timeH = document.querySelector('h1');
const timeSecond = 5;

timeH.innerHTML = timeSecond;

const countDown = setInterval (()=>{
timeSecond--;
},1000)




// Selects element by id
// var timeEl = document.getElementById("time");

// var secondsLeft = 10;

// (function () {
//     var sec = 0;
//     timer = setInterval(()=>{
//         timeEl.innerHTML = '00'+sec;
//         sec ++;
//     }, 1000)
//     })()

// // Function to create and append colorsplosion image
// // var sendMessage = function () {
// //     timeEl.textContent = " ";
// //     var imgEl = document.createElement("img");
// //     imgEl.setAttribute("src", "images/image_1.jpg");
// //     mainEl.appendChild(imgEl);
  
// //   }


// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " quickly!.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// setTime