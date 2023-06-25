function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, ModelLoaded);
	poseNet.on('pose', gotPoses);

}

function ModelLoaded()
{
	console.log("model loaded!!");
}

function gotPoses(result)
{
	if(result.length > 0)
	{
		console.log(results);
		noseX = result[0].pose.nose.x
		noseY = result[0].pose.nose.y
	}
}

function draw() {
	game()
}






