// Initialize variables
let second = 0;
let minute = 0;
let hour = 0;

// Create a new Date object to fetch the current time
let d = new Date();

// Run the following code every second
setInterval(function () {
  // Update the Date object
  d = new Date();

  // Get current hours, minutes, and seconds
  second = d.getSeconds();
  minute = d.getMinutes();
  hour = d.getHours();

  // Convert time values to rotation degrees:
  // 1 second = 6 degrees (360° / 60)
  // 1 minute = 6 degrees + slight movement based on seconds
  // 1 hour = 30 degrees per hour + slight movement based on minutes
  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  // Apply rotation to the second hand
  document.getElementById("second-line").style.transform = `rotate(${secondDeg}deg)`;

  // Apply rotation to the minute hand
  document.getElementById("minute-line").style.transform = `rotate(${minuteDeg}deg)`;

  // Apply rotation to the hour hand
  document.getElementById("hour-line").style.transform = `rotate(${hourDeg}deg)`;
}, 1000);