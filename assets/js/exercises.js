//targeted divs and array for video links
var videoLinks = [
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xyd_fa5zoEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/BQu26ABuVS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
];
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
            exerciseTitleEl.innerHTML =
              "<h2 class= 'text-white'>" + resultData.name + "</h2";
            exerciseDescriptionEl.innerHTML =
              "<p class= 'text-white'>" + resultData.description + "</p>";
            var exerciseImg = document.createElement("img");
            exerciseImg.src = "./assets/images/exercise-images/" + resultData.id + ".jpg";
            exerciseImageDivEl.append(exerciseImg);
          }
        });
      });
    } else {
        exerciseTitleEl.innerHTML =
        "<h2 class= 'text-white'> Under Construction </h2";
      exerciseDescriptionEl.innerHTML =
        "<p class= 'text-white'> Please try another exercise. Sorry for the inconvenience!</p>";
    }
  });
};

exerciseData();
