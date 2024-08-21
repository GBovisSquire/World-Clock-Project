function updateTime() {
  //LA
  let laElement = document.querySelector("#la");
  if (laElement) {
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");
    let laCurrentDateAndTime = moment();

    laDateElement.innerHTML = laCurrentDateAndTime.format("MMMM Do YYYY");

    laTimeElement.innerHTML = laCurrentDateAndTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  //PARIS
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisCurrentDateAndTime = moment();

    parisDateElement.innerHTML = parisCurrentDateAndTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisCurrentDateAndTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
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
