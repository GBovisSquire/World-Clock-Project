function updateTime() {
  //LA
  let laElement = document.querySelector("#la");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laCurrentDateAndTime = moment();

  laDateElement.innerHTML = laCurrentDateAndTime.format("MMMM Do YYYY");

  laTimeElement.innerHTML = laCurrentDateAndTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  //PARIS
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisCurrentDateAndTime = moment();

  parisDateElement.innerHTML = parisCurrentDateAndTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisCurrentDateAndTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
