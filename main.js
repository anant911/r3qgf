song1="";
song2="";


function preload()
{
    song1 = loadSound("unity.mp3");
    song2 = loadSound("cool.mp3");
}

function setup()
{
canvas=createCanvas(600,500);
canvas.position(20,300);

video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video, 0,0,600,500);
}

function play()
{
    song1.play();
    song2.play();
}