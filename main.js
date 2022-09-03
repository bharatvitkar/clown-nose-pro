nosex=0;
nosey=0;
function preload()
{
clown_nose=loadImage('https://i.postimg.cc/D0zt61rp/clownnose.png');
}

function setup()
{
    canvas=createCanvas(290,290);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(290,290);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);
    }
}

function modelLoaded()
{
    console.log('posenet model is initialized');
}

function draw()
{
image(video,0,0,290,290);
//fill(255, 0, 0);
//stroke(255, 0, 0);
//circle(nosex,nosey,20);
image(clown_nose,nosex,nosey,30,30);
}

function take_snapshot()
{
    save('myfilterimage.png');
}

