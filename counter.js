// var buttons = document.querySelectorAll("#increment");
// var counters = document.querySelectorAll("#counter");

// // Add event listener to each button
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     // Get the index of the button that was clicked
//     var index = Array.prototype.indexOf.call(buttons, this);
//     // Increment the corresponding counter
//     var count = parseInt(counters[index].textContent) + 1;
//     // Check if count has reached 100
//     if (count <= 100) {
//       counters[index].textContent = count;
//       // Disable the button if count is 100
//       if (count >= 100) {
//         counters[index].textContent = "Congratulations!";
//       }
//     }
//   });
// }
// // Get the reset button element
// const resetBtn = document.getElementById("reset");

// // Add an event listener to the reset button
// resetBtn.addEventListener("click", function() {
//   // Loop through all the counters and reset their values
//   for (var i = 0; i < counters.length; i++) {
//     counters[i].textContent = 0;
//   }
// });

var incrementButtons = document.querySelectorAll("#increment");
var resetButtons = document.querySelectorAll("#reset");
var counters = document.querySelectorAll("#counter");

// Add event listener to each increment button
for (var i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener("click", function() {
    // Get the index of the button that was clicked
    var index = Array.prototype.indexOf.call(incrementButtons, this);
    // Increment the corresponding counter
    var count = parseInt(counters[index].textContent) + 1;
    // Check if count has reached 100
    if (count <= 100) {
      counters[index].textContent = count;
      // Disable the button if count is 100
      if (count >= 100) {
        counters[index].textContent = "Congratulations!";
      }
    }
  });
}

// Add event listener to each reset button
for (var i = 0; i < resetButtons.length; i++) {
  resetButtons[i].addEventListener("click", function() {
    // Get the index of the button that was clicked
    var index = Array.prototype.indexOf.call(resetButtons, this);
    // Set the corresponding counter to 0
    counters[index].textContent = 0;
  });
}
