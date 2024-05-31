const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const counterElement = document.getElementById("counter");

let counter = 0;

minusButton.addEventListener("click", function() {
    if (counter > 0) {
        counter--;
        counterElement.textContent = counter;
    }
});

plusButton.addEventListener("click", function() {
    counter++;
    counterElement.textContent = counter;
});
