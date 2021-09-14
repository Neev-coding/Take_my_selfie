var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function Start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0] [0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content == "take my selfie"){
        Speak();
        console.log("taking selfie");
    };

}
function Speak(){
    var synth=window.speechSynthesis;
 speak_data="Taking your selfie in 5 seconds";
    var UtterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_my_selfie();
        save();
    },5000);
   

}
Webcam.set({
    width:365,
    height:251,
    image_format:'png',
    png_quality:91

});
camera=document.getElementById("camera");
function take_my_selfie(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie' src='" + data_uri + "'>";

});
}
function save(){
link=document.getElementById("link");
my_selfie=document.getElementById("selfie").src;
link.href=my_selfie;
link.click();
}