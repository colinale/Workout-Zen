//targeted divs and array for video links
var videoLinks = [{'Crunches': '<iframe width="560" height="315" src="https://www.youtube.com/embed/Xyd_fa5zoEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
{'Plank': '<iframe width="560" height="315" src="https://www.youtube.com/embed/BQu26ABuVS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}, {'Flutter Kicks': '<iframe width="560" height="315" src="https://www.youtube.com/embed/BQu26ABuVS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}];
var exerciseTitleEl = document.getElementById("title");
var exerciseDescriptionEl = document.getElementById("description");
var exerciseVideoDivEl = document.getElementById("video");

var exerciseData = function(){
    var exerciseApi = "https://wger.de/api/v2/exercise/?language=2&limit=200";

    // make a get request to url
    fetch(exerciseApi).then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
         console.log(data);
        var exercise = localStorage.getItem(exerciseName);
        console.log(exercise);
        });
    }
  });
};


exerciseData();
//grab info from local storage
//create variables that have the information specific to crunches, planks and flutter kicks
//put it in an array??
//append to exercises page
