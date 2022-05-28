var muscleEl = document.querySelector("#target-btn");
var exerciseButtonsEl = document.querySelector("#exercise-buttons");

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

var buttonClickHandler = function (event) {
  if (muscleGroup) {
    displayExerciseList(muscleGroup);
    // clear old content
    repoContainerEl.textContent = "";
  }

  // get the language attribute from the clicked element
  var muscleGroup = event.target.getAttribute("data-language");
};

var displayExerciseList = function (exercises, muscleGroup) {
  //console.log(muscleGroup);
  console.log(exercises);
};

muscleEl.addEventListener("click", muscleSubmit);
exerciseButtonsEl.addEventListener("click", buttonClickHandler);

// https://wger.de/api/v2/exercisecategory/ exercise categories
// abs = plank[141] + crunches[41] + flutter kicks [68]
// exerciseinfo https://wger.de/api/v2/exerciseinfo/
// "https://wger.de/api/v2/muscle/"
// translate: https://wger.de/api/v2/exercise/?language=2&status=2&limit=200
