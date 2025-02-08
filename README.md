# URBAN INVADERS

## Introduction

### About the original Space Invaders:

By Arcade Museum, Fair use, https://en.wikipedia.org/w/index.php?curid=41622028
Released in 1978 by Taito Corporation, and designed by Tomohiro Nishikado; Space Invaders is considered one of the most influential and greatest games of all time (https://en.wikipedia.org/wiki/Space_Invaders). After almost half a century since its origins, it has continued to be a part of the pop culture across the globe, inspiring people daily with its simplicity and iconic design.
One of my favourite street artists, Franck Slama (AKA Invader) has given the famous alien invaders and their unmistakable pixelated art a new life by installing, pixelated ceramic tiles on public walls around the world. HIs artwork includes the invaders as well as other famous characters from olds-school video games like Mario Bros and Pac Man. 
-See space-invaders website for more info on his work: (https://www.space-invaders.com/home/).

By Julie - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50343315

!(Add couple of photos from my camera row).

It’s become a personal habit of mine to photograph (or shoot) these Invader installations whenever I happily come across them whilst walking on the streets of my city or as a tourist somewhere else.
So, this project comes from that mix of nostalgia, street art and our compulsive need of capturing cool things in photos. The user controls the shooter as usual, but on this occasion, they are tourists with their cameras shooting photos of the invaders crawling down the buildings. I hope to capture some of that original fun with a twist on my version of Space Invaders. 

## User Experience

### User stories
The user: anyone should be able to play and hopefully enjoy the experience. On one side, Space Invaders recalls the nostalgia for the Golden Age of arcade games but also, it’s a simple and fun game to play. 

- As a user, I’d like to understand how to play the game.
- As a user, I would like to easily start a new game.
- As a user, I’d like to have control over some of the visuals like the background, the invader’s style or my avatar.
- As a user, I’d like to be able to pause, resume and/or start a new game.
- As a user, I’d like to control the volume for the audio effects/background music.  
- As a user, I’d like to know my score at the end of the game.
- As a user, I’d like to know if I’ve lost and be able to start again. 
- As a user, I’d like to share my score with social media and maybe challenge a friend.??

### Features
Layout: The website is presented in two pages, keeping the focus on the game as the main feature. 

#### homepage: 
- Welcome message: the homepage has a simple welcome message like a French road sign (blue background, white inner border and text written in white uppercase -but with an arcade-inspired font). The welcome message offers quick instructions and a button to start the game. 
- Maybe transitioning with a loading animation screen before the rest of the code can run. 

By Jordiet. from Reus - París, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=76505381 

- Instructions: The user can click on the instructions button to open a modal featuring a quick intro to the game and playing instructions. 
#### game page:
- Button to close the modal reads “Got it!”.
- Game Controls: Three buttons above the game’s grid that the user can click on: New Game, Pause and Resume.
- Choose your shooter/invader/space. The user can choose their favourite shooter/invader/space from a pre-set options menu underneath the game’s grid. Each space loads a different background song A default space is loaded at the start of the game and on clicking the New Game button.
- Sound controls: The user can click on the audio icons to control volume.
- A footer with social media links to share the game.
##### Gameplay: 
- On game start, the shooter is placed at the bottom centre of the grid. The grouped of invaders appear at the top left corner and start moving side to side, descending one space towards the shooter.
Using Left and Right arrows, the user can move the shooter side to side but not past the edge of the grid. 
Using the Up arrow, the shooter can fire against the invaders. 
- 3 credits are given to the user to play before the game is over. 
- Each time the shooter hits an invader, this disappears and the score is increased by one. 
- The game is won by destroying all the invaders before they touch the shooter or the bottom of the grid. If the 
- The game is lost if the invaders reach the shooter or the bottom of the grid. 
- If all invaders are destroyed. Send a new wave of faster invaders with differentiated by a different icon.??
- At random, one “boss invader” can appear during the game and shoot back at the user. The user can fire at this invader too. If the user is hit by the “boss invader”, the shooter looses a credit/life.??
- Game Over: the end of the game. A modal appears with the final score and a Congratulations! Or Game Over message. (And the option to share this on Instagram/Facebook??).   
#### Possible features to add in a future deployment:
	- Scoreboard with a top 10 of the highest scores and the user’s initials. 
 	- Boss to increase difficulty of the game. 
	- Share score to social media? 
	- Report an issue link to write an email to developer. 
	- Random math drop bomb to shooter? (Nice to have if more time) 

### Functionalities to add
- Choose your Avatar / invaders
- Score display.
- 404 Page - Looks like you’ve reached beyond space. Button: Go back! 
- Second and third wave of faster invaders?
- 3 lives? Display credits 03/02/01/game over - Would you like to play again?
- Boss with faster moving interval that shoots back at user??

### Design	
The overall design is inspired by the original arcade aesthetic and Invader’s street art installations (see introduction).
The colour palette is high-contrasting and the text elements easy to read.
The buttons and links are formatted so that the user can interact intuitively.

- Colour Palette: 

	| Color             | Hex                                                                | Name                         |
	| ----------------- | ------------------------------------------------------------------ | -----------------------------|
	| ![#252c3f](https://placehold.co/15x15/252c3f/252c3f.png) | #252c3f | Space Cadet |
	| ![#ff9f1c](https://placehold.co/15x15/ff9f1c/ff9f1c.png)| #ff9f1c | Orange Peel |
	| ![#dddddd](https://placehold.co/15x15/dddddd/dddddd.png) | #dddddd | Antiflash white | 
	| ![#102542](https://placehold.co/15x15/102542/102542.png) | #102542 | Oxford Blue |
	| ![#d10003](https://placehold.co/15x15/d10003/d10003.png) | #d10003 | Enginneering Orange |

- Typography (imported from Google Fonts): 
	- Press Start 2P: Headings and highlighted buttons.
	- Jersey 15:  General text elements. 
- Sounds and music:
- Graphics: 
- Buttons: camera capture, tile crack, fanfarre?
- Background: 
- Modals: Styled to resemble the French road signs that has been ‘invaded’ with a pixelated art installation. Format: blue background, white uppercase fonts and centred text. A tiny space Invader on the top right corner.

## WIREFRAMES  
### Information Architecture diagram

### Technologies used:
- Languages: HTML5, CSS3, JS 
- Bootstrap 5.2.3
- GitHub: to host my project  
- Visual Studio Code: IDE connected to github codespaces
- Google Fonts: Find and import font families
- Wireframe.cc: Make initial wireframes 
- canva.com- Create, edit and export sprite elements and draft my wireframes and overall design before translating it to html/css code. 
- coolors.co- Create the colour palette
- Font Awesome - arrow icons
- cloudconvert.com: convert and optimise images for the web. 

## TESTING
### HTML Validation
- Homepage:
[link to html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Findex.html)
- Invaders:
[Link to html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Finvaders.html) 
- 404: 
[link to html validotr](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2F404.html)
### CSS
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
          
[Link to css validator](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Fassets%2Fcss%2Fstyle.css&usermedium=all&vextwarning=&warning=1) 
### JS 
app.js was tested using (https://jshint.com/) 

![screenshot of code analysis](link)
- https://developer.chrome.com/docs/lighthouse/overview/ 

Jest tests!- effective and meaningful	.
If using TDD, demonstrate in commit log. Document it in Readme or separate file.

### Testing user stories

### Bugs
- Navbar toggle not behaving properly. Issue: Target was not set to correct ID. Fix: Using bootstrap’s documentation, I made sure both the parent’s data-bs-target and the id of its descendant div were the same.  
- Background image on .main-text-bg not displaying responsively. Issue: The text would overflow the container and the image was not growing with its parent div. Fix: set width to 100%, and height to 100vh so the text would stop overflowing and the image would occupy the full width of its container.
- Start game modal closing but not initialising game. The default setting for bootstrap's modal allows the user to click outside the modal to dismiss it, but if the user did this instead of pressing the start game button, the setInterval was not being updated by the startGame(). Fix:  Set backdrop to static (the modal will not close when clicking outside of it) to force the user to click on the Start Game button.
- Function restart - button event doesn't reset the game state properly. Score goes back to 0 but Invaders continue moving. Expected: As well as the score/results display, the remaining invaders should disappear and reappear in their initial position with original numbers. Fixed: use the built-in method location.reload() to reload the page, and reset the game state to its original status.
- ToggleSound function not loading audio within new soundsList object. Fix: update if statement to include the object via dot notation: boomSFX.play() => soundsList.boomSFX.play() 

## DEPLOYMENT
## CREDITS
The base javascript code for the game comes from Ania Kubów: (https://youtu.be/s6LrpUTQQn0?si=DZ24tUrVomU48pgm)
GameOver on reaching the bottom row by SCollins: (https://github.com/SJECollins/ci-pp2-pixels-arcade/tree/main)
Audio() constructor: (https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
	
### Media
- Invader cut out and edited from photo by Guilhem Vellut from Paris, France. https://www.flickr.com/photos/o_0/28023125416/  
- Pixelated camera icon⁠ edited from the original by Rara nia nur hanifa on Canva.com https://www.canva.com/icons/MAFYvLietmQ/  
- Star Pixel Art⁠ from chickchick on Canva.com https://www.canva.com/photos/MAGSKDopQAg/  
- Road sign image edited from image listing https://www.ebay.it/itm/314175660736  
- Shooter1 based on the artwork byt Patinya_P_ANG on Canva.com https://www.canva.com/photos/MAFs6D_S9Rs/  
- shooter2 made using Pixel art green retro hat by Patinya_P_Ang from Patinya_P_ANG https://www.canva.com/photos/MAFrmC84tXI/
- shooter3 cat pixel by FranGeL Katerns https://www.canva.com/icons/MAGRfqjLFK4/

Sound effects: 
- Camera capture sound effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6448">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6448">Pixabay</a>
- negative_beeps sound effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6008">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6008">Pixabay</a>
- success sound effect by <a href="https://pixabay.com/users/updatepelgo-44563794/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=221935">UpdatePelgo</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=221935">Pixabay</a>

### ACKNOWLEDGEMENTS
Related projects: 