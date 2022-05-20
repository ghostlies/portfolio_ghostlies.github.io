//game variables
//const gameOverSound = new Audio("../assets/sounds/windows_shutdown.mp3");
const music = new Audio("../assets/sounds/boneboys.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = true;
const startKey = " ";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

//background
const backgroundImage = new Image(canvas.width,canvas.height);
      backgroundImage.src = "../assets/images/purple4.jpeg";
const backgroundYPosition = canvas.height/2;
const backgroundXPosition = canvas.width/2;

// ghost variables
const ghostImage = new Image(130, 115);
      ghostImage.src = "../assets/images/ghost.png";
const ghostStartYPosition = 400;
const ghostStartYSpeed = 0;
const ghostStartYAccelleration = 0;
const ghostBeginningYAccelleration = 0.7;
const ghostXPosition = 250;
const ghostHitboxRadius = 45;
const ghostFlapForce = -12;
const ghostFlapKey = "w";
let ghostYSpeed = ghostStartYSpeed;
let ghostYAccelleration = ghostStartYAccelleration;
let ghostYPosition = ghostStartYPosition;
let ghostCanFlap = false;

//trying to make a player2
const ghost2Image = new Image(130, 115);
      ghost2Image.src = "../assets/images/ghost2.png";
const ghost2StartYPosition = 560;
const ghost2StartYSpeed = 0;
const ghost2StartYAccelleration = 0;
const ghost2BeginningYAccelleration = 0.7;
const ghost2XPosition = 250;
const ghost2HitboxRadius = 45;
const ghost2FlapForce = -12;
const ghost2FlapKey = "i";
let ghost2YSpeed = ghost2StartYSpeed;
let ghost2YAccelleration = ghost2StartYAccelleration;
let ghost2YPosition = ghost2StartYPosition;
let ghost2CanFlap = false;

//ghostscore variables
const ghostscoreImage = new Image(150, 110);
      ghostscoreImage.src = "../assets/images/ghostscore.png";
const ghostscoreImageXPosition = 70;
const ghostscoreImageYPosition = 70;
const ghostscoreTextXPosition = 130;
const ghostscoreTextYPosition = 90;
const ghostscoreTextSize = 50;
const ghostscoreTextColor = "black";
let ghostscoreValue = 0;

//ghost2score variables
const ghost2scoreImage = new Image(150, 110);
      ghost2scoreImage.src = "../assets/images/ghostscore2.png";
const ghost2scoreImageXPosition = 70;
const ghost2scoreImageYPosition = 180;
const ghost2scoreTextXPosition = 130;
const ghost2scoreTextYPosition = 200;
const ghost2scoreTextSize = 50;
const ghost2scoreTextColor = "black";
let ghost2scoreValue = 0;

// moon variables
const moonImage = new Image(300, 300);
      moonImage.src = "../assets/images/moon.png";
const moonSpawnInterval = 10000; // milliseconds
const moonXSpeed = 0;
let moonTimeSinceLastSpawn = 0; // milliseconds
let moons = [
    {
        xPosition: 1500,
        yPosition: 250,
    }
];

// uwucloud variables
const uwucloudImage = new Image(530, 250);
      uwucloudImage.src = "../assets/images/uwucloud.png";
const uwucloudSpawnInterval = 10000; // milliseconds
const uwucloudXSpeed = -.7;
let uwucloudTimeSinceLastSpawn = 0; // milliseconds
let uwuclouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2),
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2),
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2),
    },
];

// bat variables
const batImage = new Image(180, 180);
      batImage.src = "../assets/images/bat.png";
const batSpawnInterval = 100000; // milliseconds
const batXSpeed = -9;
let batTimeSinceLastSpawn = 0; // milliseconds
let bats = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2),
    }
];

// lamppost variables
const lamppostImage = new Image(450, 650);
      lamppostImage.src = "../assets/images/lamppost.png";
const lamppostSpawnInterval = 10000; // milliseconds
const lamppostXSpeed = -2;
let lamppostTimeSinceLastSpawn = 0; // milliseconds
let lampposts = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(970, 970),
    }
];

// hallowtree2 variables
/*const hallowtree2Image = new Image(450, 650);
      hallowtree2Image.src = "../assets/images/hallowtree2.png";
const hallowtree2SpawnInterval = 9500; // milliseconds
const hallowtree2XSpeed = -2.2;
let hallowtree2TimeSinceLastSpawn = 0; // milliseconds
let hallowtree2s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];

// hallowtree3 variables
const hallowtree3Image = new Image(450, 650);
      hallowtree3Image.src = "../assets/images/hallowtree3.png";
const hallowtree3SpawnInterval = 9000; // milliseconds
const hallowtree3XSpeed = -2.5;
let hallowtree3TimeSinceLastSpawn = 0; // milliseconds
let hallowtree3s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];

// hallowtree4 variables
const hallowtree4Image = new Image(450, 650);
      hallowtree4Image.src = "../assets/images/hallowtree4.png";
const hallowtree4SpawnInterval = 8500; // milliseconds
const hallowtree4XSpeed = -2.1;
let hallowtree4TimeSinceLastSpawn = 0; // milliseconds
let hallowtree4s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];

// hallowtree5 variables
const hallowtree5Image = new Image(450, 650);
      hallowtree5Image.src = "../assets/images/hallowtree5.png";
const hallowtree5SpawnInterval = 8000; // milliseconds
const hallowtree5XSpeed = -2.4;
let hallowtree5TimeSinceLastSpawn = 0; // milliseconds
let hallowtree5s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];

// hallowtree6 variables
const hallowtree6Image = new Image(450, 650);
      hallowtree6Image.src = "../assets/images/hallowtree6.png";
const hallowtree6SpawnInterval = 7500; // milliseconds
const hallowtree6XSpeed = -2.3;
let hallowtree6TimeSinceLastSpawn = 0; // milliseconds
let hallowtree6s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];

// hallowtree7 variables
const hallowtree7Image = new Image(450, 650);
      hallowtree7Image.src = "../assets/images/hallowtree7.png";
const hallowtree7SpawnInterval = 7000; // milliseconds
const hallowtree7XSpeed = -2.6;
let hallowtree7TimeSinceLastSpawn = 0; // milliseconds
let hallowtree7s = [
    {
        xPosition: randomBetween(canvas.width),
        yPosition: randomBetween(980, 970),
    }
];*/

//meteor variables
const meteorImage = new Image(560, 610);
      meteorImage.src = "../assets/images/meteor.png";
const meteorXSpeed = -5.5;
const meteorHitboxRadius = 100;
const meteorSpawnInterval = 2500;
let meteorTimeSinceLastSpawn = meteorSpawnInterval;
let meteors = [];

// candycoin variables
const candycoinSound = new Audio("../assets/sounds/drip.wav");
const candycoinSoundVolume = 0.1;
const candycoinImage = new Image(100, 100);
      candycoinImage.src = "../assets/images/candycoin2.png";
const candycoinHitboxRadius = 30;
const candycoinXSpeed = -5;
const candycoinSpawnInterval = 1000;
const candycoinValue = 1;
let candycoinTimeSinceLastSpawn = candycoinSpawnInterval
let candycoins = [];

// candycorn variables
const candycornSound = candycoinSound;
const candycornImage = new Image(80, 80)
      candycornImage.src = "../assets/images/candycorn.png";
const candycornSoundVolume = 0.1;
const candycornHitboxRadius = 30;
const candycornXSpeed = -1;
const candycornSpawnInterval = 10000;
const candycornValue = 3;
let candycornXPosition = canvas.width;
let candycornYPosition = 200; //randomBetween(0, canvas.height);
let candycornTimeSinceLastSpawn = candycornSpawnInterval
let candycorns = [];

// menu text variables
const menuFirstText = "Press space to start";
const menuTextXPosition = 200;
const menuTextYPosition = 500;
const menuSecondText = "Red press 'w' to flap" + " and Blue press 'i' to flap";
const menuTextSize = 60;
const menuTextColor = "purple";
const gameOverText = "Press " + restartKey + " to restart";
