function updateTime() {
  //LA
  let laElement = document.querySelector("#la");
  if (laElement) {
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");
    let laCurrentDateAndTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = laCurrentDateAndTime.format("MMMM Do YYYY");

    laTimeElement.innerHTML = laCurrentDateAndTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  //fiji
  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiCurrentDateAndTime = moment().tz("Pacific/Fiji");

    fijiDateElement.innerHTML = fijiCurrentDateAndTime.format("MMMM Do YYYY");
    fijiTimeElement.innerHTML = fijiCurrentDateAndTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyCurrentDateAndTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML =
      sydneyCurrentDateAndTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyCurrentDateAndTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current");
  {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesContainerElement = document.querySelector("#citiesContainer");
  citiesContainerElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")} </small>
          </div>
          </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#citiesDropDown");
citiesSelect.addEventListener("change", updateCity);
