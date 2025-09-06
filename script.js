//your JS code here. If required.
// Step 1: Get the element by ID
let element = document.getElementById("level");

// Step 2: Initialize the DOM level counter
let level = 0;

// Step 3: Traverse up the DOM tree until reaching null
while (element) {
    level++;
    element = element.parentElement;
}

// Step 4: Display the result
alert("The level of the element is: " + level);
