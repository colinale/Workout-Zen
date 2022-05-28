var muscleEl = document.querySelector("#target-btn");
//var muscleInputEl = document.querySelector("#muscle-group");

var muscleSubmit = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  exerciseList();
};

var exerciseList = function () {
  var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

  // make a get request to url
  fetch(exerciseApi).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        var exercises = data;
        absExercises(exercises);
      });
    } else {
      //toast api
      alert("Error: Exercise Not Found");
    }
  });
};

muscleEl.addEventListener("click", muscleSubmit);

var absExercises = function (exercises) {
  console.log(exercises);
};

// https://wger.de/api/v2/exercisecategory/ exercise categories
// abs = plank[141] + crunches[41] + flutter kicks [68]
// exerciseinfo https://wger.de/api/v2/exerciseinfo/
// "https://wger.de/api/v2/muscle/"
// translate: https://wger.de/api/v2/exercise/?language=2&status=2&limit=200
