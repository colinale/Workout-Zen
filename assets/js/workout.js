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
          absExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + absExerciseArray[i].name + "</a> " + " <button id='favBtn'>" + "<i class='fa-regular fa-heart'>" + "</i>" + "</button>";
          absExerciseLiEl.id = "textInfo";
          absExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(absExerciseLiEl);

          //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under

          var favouriteExerciseEl = document.getElementById("favBtn");
          favouriteExerciseEl.addEventListener("click", function () {
            var exerciseFav = document.getElementById("textInfo").getElementsByTagName("a")[0].textContent;
            console.log(exerciseFav);
            //localStorage.setItem(exerciseFav);
          });
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
        var exercises = data;
        var bicepCurls = data.results[19];
        var tricepPress = data.results[169];
        var pikePush = data.results[139];

        exerciseListUlEl.innerHTML = "";

        var armsExerciseArray = [bicepCurls, tricepPress, pikePush];
        //display each exercise name
        for (var i = 0; i < armsExerciseArray.length; i++) {
          var absExerciseLiEl = document.createElement("li");
          absExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + absExerciseArray[i].name + "</a>" + "                        " + " <button>" + "<i class='fa-light fa-heart'>" + "</i>" + "</button>";
          // console.log(absExerciseArray[i].name);
          absExerciseLiEl.addEventListener("click", function (evt) {
            console.log(evt.target.innerHTML);
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(absExerciseLiEl);
        }
      });
    }
  });
};
