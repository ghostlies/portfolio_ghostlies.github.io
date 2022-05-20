// execute the update function every 10 milliseconds
function update() {

    fillCanvas("#542599");
    drawImage(
        backgroundImage,
        backgroundXPosition,
        backgroundYPosition,
        backgroundImage.width,
        backgroundImage.height
    );

    // for every moon
    for(let moon of moons) {
        // draw the moon
        drawImage(
            moonImage,
            moon.xPosition,
            moon.yPosition,
            moonImage.width,
            moonImage.height
        );
        // update the x position of the moon
        moon.xPosition += moonXSpeed;
        // remove moon if it moves beyond the destruction point
        if(moon.xPosition < destructionXPosition) {
            moons = moons.remove(moon);
        }

    }
    // spawn a new moon when the it is time
    moonTimeSinceLastSpawn += timeSinceLastFrame;
    if(moonTimeSinceLastSpawn>moonSpawnInterval) {
        moons.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2),
        });
        moonTimeSinceLastSpawn = 0;
    }

    // for every uwucloud
    for(let uwucloud of uwuclouds) {
        // draw the uwucloud
        drawImage(
            uwucloudImage,
            uwucloud.xPosition,
            uwucloud.yPosition,
            uwucloudImage.width,
            uwucloudImage.height
        );
        // update the x position of the uwucloud
        uwucloud.xPosition += uwucloudXSpeed;
        // remove uwucloud if it moves beyond the destruction point
        if(uwucloud.xPosition < destructionXPosition) {
            uwuclouds = uwuclouds.remove(uwucloud);
        }

    }
    // spawn a new uwucloud when the it is time
    uwucloudTimeSinceLastSpawn += timeSinceLastFrame;
    if(uwucloudTimeSinceLastSpawn>uwucloudSpawnInterval) {
        uwuclouds.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2),
        });
        uwucloudTimeSinceLastSpawn = 0;
    }

    // for every bat
    for(let bat of bats) {
        // draw the bat
        drawImage(
            batImage,
            bat.xPosition,
            bat.yPosition,
            batImage.width,
            batImage.height
        );
        // update the x position of the bat
        bat.xPosition += batXSpeed;
        // remove bat if it moves beyond the destruction point
        if(bat.xPosition < destructionXPosition) {
            bats = bats.remove(bat);
        }

    }
    // spawn a new bat when the it is time
    batTimeSinceLastSpawn += timeSinceLastFrame;
    if(batTimeSinceLastSpawn>batSpawnInterval) {
        bats.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2),
        });
        batTimeSinceLastSpawn = 0;
    }

    // for every lamppost
    for(let lamppost of lampposts) {
        // draw the lamppost
        drawImage(
            lamppostImage,
            lamppost.xPosition,
            lamppost.yPosition,
            lamppostImage.width,
            lamppostImage.height
        );
        // update the x position of the lamppost
        lamppost.xPosition += lamppostXSpeed;
        // remove lamppost if it moves beyond the destruction point
        if(lamppost.xPosition < destructionXPosition) {
            lampposts = lampposts.remove(lamppost);
        }

    }
    // spawn a new lamppost when the it is time
    lamppostTimeSinceLastSpawn += timeSinceLastFrame;
    if(lamppostTimeSinceLastSpawn>lamppostSpawnInterval) {
        lampposts.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        lamppostTimeSinceLastSpawn = 0;
    }

    // for every hallowtree2
    /*for(let hallowtree2 of hallowtree2s) {
        // draw the hallowtree2
        drawImage(
            hallowtree2Image,
            hallowtree2.xPosition,
            hallowtree2.yPosition,
            hallowtree2Image.width,
            hallowtree2Image.height
        );
        // update the x position of the hallowtree2
        hallowtree2.xPosition += hallowtree2XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree2.xPosition < destructionXPosition) {
            hallowtree2s = hallowtree2s.remove(hallowtree2);
        }

    }
    // spawn a new hallowtree2 when the it is time
    hallowtree2TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree2TimeSinceLastSpawn>hallowtree2SpawnInterval) {
        hallowtree2s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree2TimeSinceLastSpawn = 0;
    }

    // for every hallowtree3
    for(let hallowtree3 of hallowtree3s) {
        // draw the hallowtree3
        drawImage(
            hallowtree3Image,
            hallowtree3.xPosition,
            hallowtree3.yPosition,
            hallowtree3Image.width,
            hallowtree3Image.height
        );
        // update the x position of the hallowtree3
        hallowtree3.xPosition += hallowtree3XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree3.xPosition < destructionXPosition) {
            hallowtree3s = hallowtree3s.remove(hallowtree3);
        }

    }
    // spawn a new hallowtree3 when the it is time
    hallowtree3TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree3TimeSinceLastSpawn>hallowtree3SpawnInterval) {
        hallowtree3s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree3TimeSinceLastSpawn = 0;
    }

    // for every hallowtree4
    for(let hallowtree4 of hallowtree4s) {
        // draw the hallowtree4
        drawImage(
            hallowtree4Image,
            hallowtree4.xPosition,
            hallowtree4.yPosition,
            hallowtree4Image.width,
            hallowtree4Image.height
        );
        // update the x position of the hallowtree4
        hallowtree4.xPosition += hallowtree4XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree4.xPosition < destructionXPosition) {
            hallowtree4s = hallowtree4s.remove(hallowtree4);
        }

    }
    // spawn a new hallowtree4 when the it is time
    hallowtree4TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree4TimeSinceLastSpawn>hallowtree4SpawnInterval) {
        hallowtree4s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree4TimeSinceLastSpawn = 0;
    }

    // for every hallowtree5
    for(let hallowtree5 of hallowtree5s) {
        // draw the hallowtree5
        drawImage(
            hallowtree5Image,
            hallowtree5.xPosition,
            hallowtree5.yPosition,
            hallowtree5Image.width,
            hallowtree5Image.height
        );
        // update the x position of the hallowtree5
        hallowtree5.xPosition += hallowtree5XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree5.xPosition < destructionXPosition) {
            hallowtree5s = hallowtree5s.remove(hallowtree5);
        }

    }
    // spawn a new hallowtree5 when the it is time
    hallowtree5TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree5TimeSinceLastSpawn>hallowtree5SpawnInterval) {
        hallowtree5s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree5TimeSinceLastSpawn = 0;
    }

    // for every hallowtree6
    for(let hallowtree6 of hallowtree6s) {
        // draw the hallowtree6
        drawImage(
            hallowtree6Image,
            hallowtree6.xPosition,
            hallowtree6.yPosition,
            hallowtree6Image.width,
            hallowtree6Image.height
        );
        // update the x position of the hallowtree6
        hallowtree6.xPosition += hallowtree6XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree6.xPosition < destructionXPosition) {
            hallowtree6s = hallowtree6s.remove(hallowtree6);
        }

    }
    // spawn a new hallowtree6 when the it is time
    hallowtree6TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree6TimeSinceLastSpawn>hallowtree6SpawnInterval) {
        hallowtree6s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree6TimeSinceLastSpawn = 0;
    }

    // for every hallowtree7
    for(let hallowtree7 of hallowtree7s) {
        // draw the hallowtree7
        drawImage(
            hallowtree7Image,
            hallowtree7.xPosition,
            hallowtree7.yPosition,
            hallowtree7Image.width,
            hallowtree7Image.height
        );
        // update the x position of the hallowtree7
        hallowtree7.xPosition += hallowtree7XSpeed;
        // remove hallowtree if it moves beyond the destruction point
        if(hallowtree7.xPosition < destructionXPosition) {
            hallowtree7s = hallowtree7s.remove(hallowtree7);
        }

    }
    // spawn a new hallowtree7 when the it is time
    hallowtree7TimeSinceLastSpawn += timeSinceLastFrame;
    if(hallowtree7TimeSinceLastSpawn>hallowtree7SpawnInterval) {
        hallowtree7s.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(980, 980),
        });
        hallowtree7TimeSinceLastSpawn = 0;
    }*/

    // draw the ghost image
    drawImage(ghostImage,
        ghostXPosition,
        ghostYPosition,
        ghostImage.width,
        ghostImage.height
    );

    //player 2
    drawImage(ghost2Image,
        ghost2XPosition,
        ghost2YPosition,
        ghost2Image.width,
        ghost2Image.height
    );

    // draw the ghost hitbox if debugmode is on
    /*if(debugModeIsOn) {
        drawCircle(
            ghostXPosition,
            ghostYPosition,
            ghostHitboxRadius,
            hitboxColor
        );
    }

    //player 2
    if(debugModeIsOn) {
        drawCircle(
            ghost2XPosition,
            ghost2YPosition,
            ghost2HitboxRadius,
            hitboxColor
        );
    }*/

    // update the ghost movement
    ghostYSpeed += ghostYAccelleration;
    ghostYPosition += ghostYSpeed;

    if (gameState == "action") {
        // end the game if the ghost touches the canvas edge
        if(canvas.height < ghostYPosition || ghostYPosition < 0) {
            //gameOverSound.play();
            ghostCanFlap = false;
            gameState = "gameover";
        }
    }

    //player 2
    ghost2YSpeed += ghost2YAccelleration;
    ghost2YPosition += ghost2YSpeed;

    if (gameState == "action") {
        //player 2
        if(canvas.height < ghost2YPosition || ghost2YPosition < 0) {
            //gameOverSound.play();
            ghost2CanFlap = false;
            gameState = "gameover";
        }
    }

    // for each candycoin
    for(let candycoin of candycoins) {
        // draw the candycoin
        drawImage(
            candycoinImage,
            candycoin.xPosition,
            candycoin.yPosition,
            candycoinImage.width,
            candycoinImage.height
        );

        /*if(debugModeIsOn) {
            drawCircle(
                candycoin.xPosition,
                candycoin.yPosition,
                candycoinHitboxRadius,
                hitboxColor
            );
        }*/

        //bad second coin attempt??
    //console.log(candycornXPosition, candycornYPosition);

        if(gameState == "menu") {
            candycornXPosition = spawnXPosition;
        }

    if(gameState == "action"){
        if(candycornXPosition <-100){
            candycornXPosition = spawnXPosition;
            candycornYPosition = randomBetween(0, canvas.height);
        }

        candycornXPosition += candycornXSpeed;

            // check if the candycorns collides with the ghost
            if(theseCirclesCollide(
                ghostXPosition,
                ghostYPosition,
                ghostHitboxRadius,
                candycornXPosition,
                candycornYPosition,
                candycornHitboxRadius
            ))
            { // if they do, increase the ghostscore
                candycornSound.play();
                candycornXPosition = canvas.width * 1.2;
                candycornYPosition = randomBetween(0, canvas.height);
                ghostscoreValue += candycornValue;
                //candycorns = candycorns.remove(candycorn);
            }

            //player 2
            if(theseCirclesCollide(
                ghost2XPosition,
                ghost2YPosition,
                ghost2HitboxRadius,
                candycornXPosition,
                candycornYPosition,
                candycornHitboxRadius
            ))
            { // if they do, increase the ghost2score
                candycornSound.play();
                candycornXPosition = canvas.width * 1.2;
                candycornYPosition = randomBetween(0, canvas.height);
                ghost2scoreValue += candycornValue;
                //candycorns = candycorns.remove(candycorn);
            }
        }

        if(gameState == "gameover") {
            candycornXPosition += candycornXSpeed;
        }

        // draw the candycorn
        drawImage(
            candycornImage,
            candycornXPosition,
            candycornYPosition,
            candycornImage.width,
            candycornImage.height
        );

        /*if(debugModeIsOn) {
            drawCircle(
                candycornXPosition,
                candycornYPosition,
                candycornHitboxRadius,
                hitboxColor
            );
        }*/

        //collision between birds??
        /*if(gameState == "action") {
            if(theseCirclesCollide(
                ghostYPosition,
                ghostYPosition,
                ghostHitboxRadius,
                ghost2XPosition,
                ghost2YPosition,
                ghost2HitboxRadius
            ))
            {

            }
        }*/

        // move the candycoin
        candycoin.xPosition += candycoinXSpeed;

        if(gameState == "action") {
            // check if the candycoins collides with the ghost
            if(theseCirclesCollide(
                ghostXPosition,
                ghostYPosition,
                ghostHitboxRadius,
                candycoin.xPosition,
                candycoin.yPosition,
                candycoinHitboxRadius
            ))
            { // if they do, increase the ghostscore
                candycoinSound.play();
                ghostscoreValue += candycoinValue;
                candycoins = candycoins.remove(candycoin);
            }
        }

        if(gameState == "action") {
            //player 2
            if(theseCirclesCollide(
                ghost2XPosition,
                ghost2YPosition,
                ghost2HitboxRadius,
                candycoin.xPosition,
                candycoin.yPosition,
                candycoinHitboxRadius
            ))
            { // if they do, increase the ghost2score
                candycoinSound.play();
                ghost2scoreValue += candycoinValue;
                candycoins = candycoins.remove(candycoin);
            }
        }

         // remove candycoin if it goes off the screen
         if(candycoin.xPosition < destructionXPosition) {
            candycoins = candycoins.remove(candycoin);
        }
         // remove candycorn if it goes off the screen
         if(candycornXPosition < destructionXPosition) {
            candycorns = candycorns.remove(candycorn);
        }
    }

    // spawn new candycoins
    if(gameState == "action" &&
    candycoinTimeSinceLastSpawn>candycoinSpawnInterval) {
        candycoins.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        candycoinTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        candycoinTimeSinceLastSpawn += timeSinceLastFrame;
    }

    // spawn new candycorns
    if(gameState == "action" &&
    candycornTimeSinceLastSpawn>candycornSpawnInterval) {
        candycorns.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        candycornTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        candycornTimeSinceLastSpawn += timeSinceLastFrame;
    }

    // for each meteor
    for(let meteor of meteors) {
        // draw the meteor
        drawImage(meteorImage,
            meteor.xPosition,
            meteor.yPosition,
            meteorImage.width,
            meteorImage.height
        );

        /*if(debugModeIsOn) { // draw the hitbox
            drawCircle(
                meteor.xPosition,
                meteor.yPosition,
                meteorHitboxRadius,
                hitboxColor
            );
        }*/

        // move the meteor
        meteor.xPosition += meteorXSpeed;

        // remove meteor if it goes off the screen
        if(meteor.xPosition < destructionXPosition) {
            meteors = meteors.remove(meteor);
        }

        if(gameState == "action") {
            // check if the meteor collides with the ghost
            if(theseCirclesCollide(
                ghostXPosition,
                ghostYPosition,
                ghostHitboxRadius,
                meteor.xPosition,
                meteor.yPosition,
                meteorHitboxRadius
            ))
            { // if they do, end the game
                ghostCanFlap = false;
                //gameOverSound.play();
                gameState = "gameover";
            }
        }

        if(gameState == "action") {
            //player 2
            if(theseCirclesCollide(
                ghost2XPosition,
                ghost2YPosition,
                ghost2HitboxRadius,
                meteor.xPosition,
                meteor.yPosition,
                meteorHitboxRadius
            ))
            { //player 2
                ghost2CanFlap = false;
                //gameOverSound.play();
                gameState = "gameover";
            }
        }
    }

    // spawn new meteors
    if(gameState == "action" &&
    meteorTimeSinceLastSpawn>meteorSpawnInterval) {
        meteors.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        meteorTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        meteorTimeSinceLastSpawn += timeSinceLastFrame;
    }

    //draw the ghostscoreboard
    drawImage(
        ghostscoreImage,
        ghostscoreImageXPosition,
        ghostscoreImageYPosition,
        ghostscoreImage.width,
        ghostscoreImage.height
    );
    drawText(
        "x"+ ghostscoreValue,
        ghostscoreTextXPosition,
        ghostscoreTextYPosition,
        ghostscoreTextSize,
        ghostscoreTextColor
    );

    //draw the ghost2scoreboard
    drawImage(
        ghost2scoreImage,
        ghost2scoreImageXPosition,
        ghost2scoreImageYPosition,
        ghost2scoreImage.width,
        ghost2scoreImage.height
    );
    drawText(
        "x"+ ghost2scoreValue,
        ghost2scoreTextXPosition,
        ghost2scoreTextYPosition,
        ghost2scoreTextSize,
        ghost2scoreTextColor
    );

    // draw the menu text
    if(gameState == "menu") {
        drawText (
            menuFirstText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(gameState == "action" && ghostYAccelleration == 0) {
        drawText (
            menuSecondText,
            menuSecondText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    //player 2
    if(gameState == "action" && ghost2YAccelleration == 0) {
        drawText (
            menuSecondText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    // draw the game over text
    if(gameState == "gameover") {
        drawText (
            gameOverText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "black"
        );
    }

    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
