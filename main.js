var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();


function start() {

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
console.log(event);
content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
console.log(content);
if (content == "take my selfie") {
console.log("taking selfie");
speak();
}

}




function speak() {

var synth = window.speechSynthesis;
 
var speakData = "Taking Your Selfie In Five Seconds";

var utterThis = new SpeechSynthesisUtterance(speakData);

synth.speak(utterThis);

Webcam.attach(cam);
setTimeout(function(){
    take_snapshot();
    save();
},5000);
}

cam = document.getElementById("camera");

Webcam.set({

width: 360 ,
height: 250,
image_format: 'jpg',
jpg_quality: 90


});

function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'" >';
}); 

}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}





