function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/67-NYUz_Q/model.json",modelloaded);
}
function modelloaded(){
    classifier.classify(gotResult);
}