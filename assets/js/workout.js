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
  } else if (muscleGroup == "legs") {
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
          //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
          var anchor = document.createElement("a");
          anchor.href = "./exercises.html";
          anchor.textContent = absExerciseArray[i].name;
          var favBtn = document.createElement("button");
          favBtn.setAttribute("class", "heart-btn ml-5");
          favBtn.innerHTML = "<i class='fa-regular fa-heart'>" + "</i>";

          absExerciseLiEl.append(anchor);
          absExerciseLiEl.append(favBtn);
          absExerciseLiEl.id = "textInfo";
          absExerciseLiEl.setAttribute("class", "exerciseList");
          absExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            //console.log(exerciseName);
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
          //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
          var anchor = document.createElement("a");
          anchor.href = "./exercises.html";
          anchor.textContent = armsExerciseArray[i].name;
          var favBtn = document.createElement("button");
          favBtn.setAttribute("class", "heart-btn ml-5");
          favBtn.innerHTML = "<i class='fa-regular fa-heart'>" + "</i>";

          armsExerciseLiEl.append(anchor);
          armsExerciseLiEl.append(favBtn);
          armsExerciseLiEl.id = "textInfo";
          armsExerciseLiEl.setAttribute("class", "exerciseList");
          armsExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            //console.log(exerciseName);
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(armsExerciseLiEl);
        }
      });
    }
  });
};

//favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
$("body").on("click", ".heart-btn", function (e) {
  //console.log(e.target.parentNode.previousElementSibling.textContent);
  var exerciseFav = e.target.parentNode.previousElementSibling.textContent;
  console.log(exerciseFav);
  localStorage.setItem("favourited", exerciseFav);
  console.log(localStorage);
  displayFavourites();
});

//this function fetches the exercises from the exercise api for legs and displays the exercises
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
          //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
          var anchor = document.createElement("a");
          anchor.href = "./exercises.html";
          anchor.textContent = armsExerciseArray[i].name;
          var favBtn = document.createElement("button");
          favBtn.setAttribute("class", "heart-btn ml-5");
          favBtn.innerHTML = "<i class='fa-regular fa-heart'>" + "</i>";

          legsExerciseLiEl.append(anchor);
          legsExerciseLiEl.append(favBtn);
          legsExerciseLiEl.id = "textInfo";
          legsExerciseLiEl.setAttribute("class", "exerciseList");
          legsExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            //console.log(exerciseName);
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(legsExerciseLiEl);
        }
      });
    }
  });
};

//function for displaying favourite list
var displayFavourites = function () {
  var favListEl = document.querySelector("#fav-list");
  var savedFavourites = localStorage.getItem("favourited");
  //console.log(savedFavourites);

  var favInfoDiv = document.createElement("div");
  favInfoDiv.innerHTML = savedFavourites;
  favListEl.appendChild(favInfoDiv);

  //making sure that there aren't duplicates
  // if (savedFavourites) {
  //   return;
  // }

  //clear favourites div function
};
