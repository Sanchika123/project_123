function setup(){
    video= createCapture(VIDEO);
    video.size(550, 550);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('#5dba8f');
}