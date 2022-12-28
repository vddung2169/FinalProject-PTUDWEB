var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Không hiểu sao in ra vẫn ra value mà set vào innerHTML nó lại không hiện ấy

console.log(slider.value);
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = slider.value;
}