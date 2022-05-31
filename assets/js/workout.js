//variables
var muscleEl = document.querySelector("#target-btn");
var exerciseButtonsEl = document.querySelector("#exercise-buttons");
var exerciseListUlEl = document.querySelector(".exercise-list");
var alertDivEl = document.querySelector(".alert-div");


//this function handles the user clicking each muscle button
var buttonClickHandler = function (event) {
  var muscleGroup = event.target.getAttribute("data-language");
  if (muscleGroup == "abs") {
    exerciseListAbs();
  } else if (muscleGroup == "arms") {
    exerciseListArms();
  } else if (muscleGroup == "legs"){
    exerciseListLegs();
  }
};
//event listener for buttonClickHandler
exerciseButtonsEl.addEventListener("click", buttonClickHandler);

//this function fetches the exercises from the exercise api for abs and displays the exercises
var exerciseListAbs = function () {
  var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

  // make a get request to url
  fetch(exerciseApi).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        var crunches = data.results[41];
        var plank = data.results[141];
        var flutterKicks = data.results[67];

        exerciseListUlEl.innerHTML = "";
        var absExerciseArray = [crunches, plank, flutterKicks];
        //display each exercise name
        for (var i = 0; i < absExerciseArray.length; i++) {
          var absExerciseLiEl = document.createElement("li");
          absExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + absExerciseArray[i].name + "</a>";
          absExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(absExerciseLiEl);
        }

      });
    }
  });
};

//this function fetches the exercises from the exercise api for arms and displays the exercises
var exerciseListArms = function () {
  var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

  // make a get request to url
  fetch(exerciseApi).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        var bicepCurls = data.results[20];
        var tricepPress = data.results[169];
        var pikePush = data.results[139];

        exerciseListUlEl.innerHTML = "";

        var armsExerciseArray = [bicepCurls, tricepPress, pikePush];
        //display each exercise name
        for (var i = 0; i < armsExerciseArray.length; i++) {
          var armsExerciseLiEl = document.createElement("li");
          armsExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + armsExerciseArray[i].name + "</a>";
          armsExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(armsExerciseLiEl);
        }
      });
    }
  });
};


var exerciseListLegs = function () {
  var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

  // make a get request to url
  fetch(exerciseApi).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        var forwardLunge = data.results[71];
        var squats = data.results[194];
        var highKnees = data.results[86];

        exerciseListUlEl.innerHTML = "";
        legsExerciseArray = [forwardLunge, squats, highKnees];
        //display each exercise name
        for (var i = 0; i < legsExerciseArray.length; i++) {
          var legsExerciseLiEl = document.createElement("li");
          legsExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + legsExerciseArray[i].name + "</a>";
          legsExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(legsExerciseLiEl);
        }
      });
    }
  });
};

