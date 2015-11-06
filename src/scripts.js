(function () {

var $ = function (selector) {
    return document.querySelector(selector);
};

function toggleForm () {
    if (projectButton.checked) {
	     project.classList.remove("onzichtbaar");
	     stage.classList.add("onzichtbaar");
	}
	    else if (stageButton.checked) {
	     stage.classList.remove("onzichtbaar");
	     project.classList.add("onzichtbaar");
	}
}

if ( window.location.pathname == "/formulier.html" ) {

var projectButton = document.getElementById("projectButton");
var stageButton = document.getElementById("stageButton");
var project = document.getElementById("project");
var stage = document.getElementById("stage");

project.classList.add("onzichtbaar");
stage.classList.add("onzichtbaar");

projectButton.addEventListener("click", toggleForm, false);
stageButton.addEventListener("click", toggleForm, false);

} else {
	console.log("Geen formulier");
}


var audio_trigger_c = $("#audio_trigger_c");
var audio_trigger_m = $("#audio_trigger_m");
var audio_trigger_d = $("#audio_trigger_d");


var audio_c = $("#hover_audio > #clip_c");
var audio_m = $("#hover_audio > #clip_m");
var audio_d = $("#hover_audio > #clip_d");

function playSound(audio) {
	var audio_all = document.querySelectorAll("audio");
	var i;

	for (i = 0; i<audio_all.length; i++) {
		audio_all[i].pause();
		audio_all[i].currentTime = 0;
	}
    audio.play();
}

audio_trigger_c.addEventListener("mouseover", function(){
	playSound(audio_c);
}, false);

audio_trigger_m.addEventListener("mouseover", function(){
	playSound(audio_m);
}, false);

audio_trigger_d.addEventListener("mouseover", function(){
	playSound(audio_d);
}, false);

})();