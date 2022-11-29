const outTemp = parseInt(prompt("whats the temp?"));

if (outTemp >= 25) {
  console.log("its warm take shorts");
} else if (outTemp < 25) {
  console.log("its colder take something warm");
}

const Day = parseInt(prompt("whats the day? type numbers"));
const Hour = parseInt(prompt("whats the hour?"));

if ((Day === 1 || Day === 3) && Hour === 18) {
  console.log("open zoom!!!!!");
} else if ((Day === 1 || Day === 3) && Hour > 18) {
  console.log("learn coding");
} else if (Day === 2 && Hour >= 19) {
  console.log("go for family dinner on GREG");
} else if ((Day === 3 || Day === 5) && Hour >= 8 && Hour <= 17) {
  console.log("go to work!!");
} else if (Day === 6 && Hour >= 12) {
  console.log("go to shabbat to grandma");
}
