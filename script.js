const endDate = "21 April 2023 06:23 PM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();

  // end - now = gives miliseconds, divided by 1000 gives Seconds.
  const diff = (end - now) / 1000;

  // Negative value will not return
  if (diff < 0) return;

  //convert into days & shows on input value
  inputs[0].value = Math.floor(diff / 3600 / 24);
  // Hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //Minutes
  inputs[2].value = Math.floor((diff / 60) % 60);
  //
  inputs[3].value = Math.floor(diff) % 60;
};

clock();

setInterval(() => {
  clock();
}, 1000);

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec;
 */
