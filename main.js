leftWristX = 0;
rightWristX = 0;
difference = 0;
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
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('leftWristX: '+leftWristX+' rightWristX: '+rightWristX+' difference: '+difference);
        document.getElementById('text_size').innerHTML= 'The text size will be: '+difference;
    }
}

function draw(){
    background('#5dba8f');

    textSize(difference);
    fill('#4287f5');
    text('Sanchika', 40, 500);
}

