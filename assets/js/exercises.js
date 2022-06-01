//targeted divs and array for video links
var exerciseTitleEl = document.getElementById("title");
var exerciseDescriptionEl = document.getElementById("description");
var exerciseImageDivEl = document.getElementById("exercise-image");

var exerciseData = function () {
  var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

  // make a get request to url
  fetch(exerciseApi).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        var currentExercise = localStorage.getItem("exercises");
        data.results.find(function (exercise) {
          if (exercise.name == currentExercise) {
            var resultData = exercise;
            exerciseTitleEl.innerHTML = "<h2 class= 'text-white'>" + resultData.name + "</h2";
            exerciseDescriptionEl.innerHTML = "<p class= 'text-white'>" + resultData.description + "</p>";
            exerciseDescriptionEl.setAttribute("class", "exercise-description pb-1");
            var exerciseImg = document.createElement("img");
            exerciseImg.src = "./assets/images/exercise-images/" + resultData.id + ".jpg";
            exerciseImg.setAttribute("class", "pt-2");
            exerciseImageDivEl.append(exerciseImg);
          }
        });
      });
    } else {
      exerciseTitleEl.innerHTML = "<h2 class= 'text-white'> Under Construction </h2";
      exerciseDescriptionEl.innerHTML = "<p class= 'text-white'> Please try another exercise. Sorry for the inconvenience!</p>";
    }
  });
};

exerciseData();
