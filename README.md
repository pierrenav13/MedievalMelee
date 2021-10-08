# MedievalMelee

#Background
  Medieval Melee is a 2D game where a player must avoid a boss that is chasing the player. The boss checks for the player's position, stores that position, then moves in that direction until it hits the edge of the board. Once it hits the edge, the boss check the position again and moves in that direction, but a little faster. This continues faster and faster until the player is caught and gets his score based on how long they survived.
  
 #Functionality & MVPs
 Users will be able to:
  -Start, pause and restart the game
  -Use WASD to move around the level
  -Use an instructions button to learn how to play
  -Recieve a score at the end of the game.
 In addition, this project will include:
  A production README
  
 #Wireframes
 
![Homepage](https://user-images.githubusercontent.com/85881627/136559142-6e3b2261-3bec-4471-937d-f1a2b70d779f.png)
  -Instructions: Shows a popup box with an explanation of the rules and the controls of the game (WASD).
  -Pause: Shows the player's current score and gives them the option to unpause and reset the game.
  -Game Level: Contains the player and the boss.
  -Nav Links: Github, LinkedIn

 
 #Technologies, Libraries, APIs
  -Canvas for the level and players.
  -Webpack to bundle JS
 
 #Implementation Timeline
  -Friday Afternoon & Weekend: Setup project, get webpack running, and work on setting up the basics of the level and the movement of the boss and player.

  -Monday:  Finish user and boss collision if not done already, make sure everything works together,

  -Tuesday: Work on setting up animations. Look into assets for player, boss, and level.

  -Wednesday: Implement the assets into the game and work on the instructions and look of the webpage

  -Thursday Morning: Setup hosting for webpage
  
  #Bonus Features
    -Second level where boss bounces off the walls
    -Implement items that boost the speed of the player, or slows down the boss. Extra life item to prolong the game.
