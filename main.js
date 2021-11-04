//https://teachablemachine.withgoogle.com/models/K2IgkLe-d/

function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K2IgkLe-d/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}