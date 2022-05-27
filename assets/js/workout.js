var muscleEl = document.querySelector("#search-btn");
//var muscleInputEl = document.querySelector("#muscle-group");

var muscleSubmit = function (event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var muscleName = muscleInputEl.value.trim();

  if (muscleName) {
    getMuscleGroup(muscleName);

    // clear old content
    muscleInputEl.value = "";
  } else {
    alert("Please enter a muscle group you want to target");
  }
};

var getMuscleGroup = function (muscle) {
  var muscleApi = "https://wger.de/api/v2/muscle/";
  // make a get request to url
  fetch(muscleApi).then(function (response) {
    // request was successful
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert("Error: Muscle group Not Found");
    }
  });
};

muscleEl.addEventListener("click", muscleSubmit);
