document.addEventListener("keydown", function(event) {

    // start the game if the startkey is pressed
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        ghostCanFlap = true;
        ghost2CanFlap = true;
        return;
    }

    // flap the wings of the ghost if the flapkey is pressed
    if (gameState == "action" && event.key == ghostFlapKey && ghostCanFlap == true) {
        if(ghostYAccelleration == 0) ghostYAccelleration = ghostBeginningYAccelleration;
        ghostYSpeed = ghostFlapForce;
        ghostCanFlap = false;
        ghostFlapSound.currentTime = 0.1;
        ghostFlapSound.play();
        return;
    }

    //player 2
    if (gameState == "action" && event.key == ghost2FlapKey && ghost2CanFlap == true) {
        if(ghost2YAccelleration == 0) ghost2YAccelleration = ghost2BeginningYAccelleration;
        ghost2YSpeed = ghost2FlapForce;
        ghost2CanFlap = false;
        ghost2FlapSound.currentTime = 0.1;
        ghost2FlapSound.play();
        return;
    }

    // reset the game if the restart key is pressed
    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        ghostYPosition = ghostStartYPosition;
        ghostYSpeed = ghostStartYSpeed;
        ghostYAccelleration = ghostStartYAccelleration;
        ghostCanFlap = false;
        ghost2YPosition = ghost2StartYPosition;
        ghost2YSpeed = ghost2StartYSpeed;
        ghost2YAccelleration = ghost2StartYAccelleration;
        ghost2CanFlap = false;
        meteors = [];
        meteorTimeSinceLastSpawn = meteorSpawnInterval;
        ghostscoreValue = 0;
        ghost2scoreValue = 0;
        candycoins = [];
        candycorns = [];
        //candycornXPosition = spawnXPosition;
        return;
    }

});

document.addEventListener("keyup", function(event) {

    // make the ghost able to flap again if the flapkey is released
    if (gameState == "action" && event.key == ghostFlapKey) {
        ghostCanFlap = true;
        return;
    }

});

document.addEventListener("keyup", function(event) {

    //player 2
    if (gameState == "action" && event.key == ghost2FlapKey) {
        ghost2CanFlap = true;
        return;
    }

});
