https://teachablemachine.withgoogle.com/models/puedUyU0J/
//xxloXUvhu
Webcam.set({
    height:300,
    Width:300,
    image_format:'png',
    png_quality:99
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'">';
    });
}

console.log("ml5 version", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/puedUyU0J/model.json', modLoaded);

function modLoaded(){
    console.log('Mod Loaded');
}

function check_image(){
    var image=document.getElementById("img1");
    classifier.classify(image, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)*100+"%";
    }
}