prediction1 = "";

Webcam.set({
    width : 350,
    height : 350,
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnap() {
    Webcam.snap(function(snap){
        document.getElementById("result").innerHTML = "<img id = 'captured_img' src = '"+ snap +"'/>";
    });
}


function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The hand gesture is " + prediction;
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}

// ml5
