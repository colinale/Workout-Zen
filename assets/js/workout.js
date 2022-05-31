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
          absExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + absExerciseArray[i].name + "</a> " + " <button class='ml-5' id='favBtn'>" + "<i class='fa-regular fa-heart'>" + "</i>" + "</button>";
          absExerciseLiEl.id = "textInfo";
          absExerciseLiEl.setAttribute("class", "exerciseList");
          absExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(absExerciseLiEl);
        }

        //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
        var favouriteExerciseEl = document.getElementById("favBtn");
        favouriteExerciseEl.addEventListener("click", function () {
          var exerciseFav = document.getElementById("textInfo").getElementsByTagName("a")[0].textContent;
          //console.log(exerciseFav);
          localStorage.setItem("favourited", exerciseFav);
          console.log(localStorage);
          displayFavourites();
        });
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
          armsExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + armsExerciseArray[i].name + "</a> " + " <button class='heart-btn ml-5' id='favBtn'>" + "<i class='fa-regular fa-heart'>" + "</i>" + "</button>";
          armsExerciseLiEl.id = "textInfo";
          armsExerciseLiEl.setAttribute("class", "exerciseList");
          armsExerciseLiEl.addEventListener("click", function (evt) {
            var exerciseName = evt.target.innerHTML;
            localStorage.setItem("exercises", exerciseName);
          });
          exerciseListUlEl.appendChild(armsExerciseLiEl);
        }

        //favourites function when user clicks the heart it saves the exercise as a favourite exercise and then displays it under
        var favouriteExerciseEl = document.getElementById("favBtn");
        favouriteExerciseEl.addEventListener("click", function (e) {
          if (e.target.classList.contains("heart-btn")) {
            var exerciseFav = document.getElementById("textInfo").getElementsByTagName("a")[0].textContent;
            //console.log(exerciseFav);
            localStorage.setItem("favourited", exerciseFav);
            console.log(localStorage);
            displayFavourites();
          }

          //making sure that there aren't duplicates
          // if (!exerciseFav) {
          //   localStorage.setItem("favourited", exerciseFav);
          //   console.log(localStorage);
          //   displayFavourites();
          // }
        });
      });
    }
  });
};

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
          legsExerciseLiEl.innerHTML = "<a href ='./exercises.html'>" + legsExerciseArray[i].name + "</a>";
          legsExerciseLiEl.setAttribute("class", "exerciseList");
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

//function for displaying favourite list
var displayFavourites = function () {
  var favListEl = document.querySelector("#fav-list");
  var savedFavourites = localStorage.getItem("favourited");
  //console.log(savedFavourites);

  var favInfoDiv = document.createElement("div");
  favInfoDiv.innerHTML = savedFavourites;
  favListEl.appendChild(favInfoDiv);

  //making sure that there aren't duplicates
  //if (savedFavourites) {  }

  //clear favourites div function
};
