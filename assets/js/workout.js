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
          absExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + absExerciseArray[i].name + "</a>";
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
        for (var i = 0; i < absExerciseArray.length; i++) {
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


//this function handles an exercise submission (I think we might need to get rid of this unless we have time)
// var muscleSubmit = function (event) {
//   // prevent page from refreshing
//   event.preventDefault();
//   exerciseList();
// };
// muscleEl.addEventListener("click", muscleSubmit);

//EXTRA STUFF
// https://wger.de/api/v2/exercisecategory/ exercise categories
// abs = plank[141] + crunches[41] + flutter kicks [68]
// exerciseinfo https://wger.de/api/v2/exerciseinfo/
// "https://wger.de/api/v2/muscle/"
// translate: https://wger.de/api/v2/exercise/?language=2&status=2&limit=200

//This is to create an alert using Tailwind, if we want to have a submit function
/* <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Holy smokes!</strong>
  <span class="block sm:inline">Something seriously bad happened.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>*/
