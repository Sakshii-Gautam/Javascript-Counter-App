//Getting the counter from the DOM
let displayCounter = document.getElementById('number');

function increment() {
  //Changing the counter value from string to a number and then incrementing it
  Number(displayCounter.textContent++);
}

function decrement() {
  //Changing the counter value from string to a number and then decrementing it
  Number(displayCounter.textContent--);
}

function reset() {
  //Setting the counter value equal to zero
  displayCounter.textContent = 0;
}
