
  

// Set the date we're counting down to
var countDownDate = new Date("Feb 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =  `<div class="ct-x">
  <div style="display: flex; flex-direction: column">
      <p>${days}</p>
      <small style="color:white;font-size:2rem">days</small>
  </div>
  <section style="color:white">:</section>
  <div class="ct-y">
      <p>${hours}</p>
      <small style="color:white; font-size:2rem">hours</small>
  </div>
  <section style="color:white">:</section>
  <div class="ct-y">
      <p>${minutes}</p>
      <small style="color:white ;font-size:2rem">minutes</small>
  </div>
  <section style="color:white">:</section>
  <div class="ct-y">
      <p>${seconds}</p>
      <small style="color:white; font-size:2rem">seconds</small>
  </div>
</div>`


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


