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
Layout: The website is a single page to keep the focus on the game as the main focal point. 
Welcome message: the homepage has a simple welcome message like a French road sign (blue background, green border with white uppercase fonts, vertically centred) with a tiny space Invader on the top right corner. The message displayed offers quick instructions and a button to start the game. Maybe transitioning with a loading animation screen before the rest of the code can run. 

By Jordiet. from Reus - París, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=76505381 

Instructions: The user can click on the instructions button to open a modal featuring a quick intro to the game and playing instructions. Button to close the modal reads “Got it!”.
Game Controls: Three buttons above the game’s grid that the user can click on: New Game, Pause and Resume.
Choose your shooter/invader/space. The user can choose their favourite shooter/invader/space from a pre-set options menu underneath the game’s grid. Each space loads a different background song A default space is loaded at the start of the game and on clicking the New Game button.
Volume controls: The user can click on the audio icons to control volume.
A footer with social media links to share the game.
Gameplay: 
On game start, the shooter is placed at the bottom centre of the grid. The grouped of invaders appear at the top left corner and start moving side to side, descending one space towards the shooter.
Using Left and Right arrows, the user can move the shooter side to side but not past the edge of the grid. 
Using the Up arrow, the shooter can fire against the invaders. 
3 credits are given to the user to play before the game is over. 
Each time the shooter hits an invader, this disappears and the score is increased by one. 
The game is won by destroying all the invaders before they touch the shooter or the bottom of the grid. If the 
The game is lost if the invaders reach the shooter or the bottom of the grid. 
If all invaders are destroyed. Send a new wave of faster invaders with differentiated by a different icon.??
At random, one “boss invader” can appear during the game and shoot back at the user. The user can fire at this invader too. If the user is hit by the “boss invader”, the shooter looses a credit/life.??
Game Over: the end of the game. A modal appears with the final score and a Congratulations! Or Game Over message. (And the option to share this on Instagram/Facebook??).   
#### Future features to add:
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
- Store highest score across 3 lives.??
- Boss with faster moving interval that shoots back at user??

### Design	
The overall design is inspired by the original arcade aesthetic and Invader’s street art installations (see introduction).
The colour palette is high-contrasting and the text elements easy to read.
The buttons and links are formatted so that the user can interact intuitively.
	- Colour Palette: 
    red: #ec0003
#f82d32 

--space-cadet: #252c3fff;
--engineering-orange: #d10003ff;
--princeton-orange: #fa932cff;
--platinum: #ddddddff;
—antiflash-white: #efefefff;

252c3f-d10003-fa932c-dddddd-efefef

	- Typography: Caracteres (used in French road signs) https://www.ffonts.net/Caracteres-L1.font.download#google_vignette
	- Sounds and music:
	- Graphics:
	- Buttons:
	- Background:
	- Modals: Styled to resemble the French road signs that has been ‘invaded’ with a pixelated art installation. Format: blue background, white uppercase fonts and centred text. A tiny space Invader on the top right corner.

## WIREFRAMES  
### TECHNOLOGIES USED  
HTML5, CSS3, JS, GitHub, Visual Studio Code, Google Fonts, ffonts.net, Wireframe.cc, Abode Color Palette (https://color.adobe.com/) canva.com, SVG REPO (www.svgrepo.com) to source and customise the svg graphics. https://cloudconvert.com/svg-to-webp to convert and optimise images for the web. 

## TESTING
Online validation: HTML, CSS, JS, Lighthouse on google
https://validator.w3.org/ 
https://jigsaw.w3.org/css-validator/ 
https://jshint.com/ 
https://developer.chrome.com/docs/lighthouse/overview/ 
Jest tests!- effective and meaningful	.
If using TDD, demonstrate in commit log. Document it in Readme or separate file.

### Testing user stories

### BUGS
Navbar toggle not behaving properly. Issue: Target was not set to correct ID. Fix: Using bootstrap’s documentation, I made sure both the parent’s data-bs-target and the id of its descendant div were the same.  
Background image on .main-text-bg not displaying responsively. Issue: The text would overflow the container and the image was not growing with its parent div. Fix: set width to 100%, and height to 100vh so the text would stop overflowing and the image would occupy the full width of its container.

## DEPLOYMENT
## CREDITS
	The base javascript code for the game comes from Ania Kubów ( https://youtu.be/s6LrpUTQQn0?si=DZ24tUrVomU48pgm)
	
	
### MEDIA
	Invader cut out and edited from photo by Guilhem Vellut from Paris, France. https://www.flickr.com/photos/o_0/28023125416/
Camera pixel illustration⁠ from Rafiico Studio on Canva.com https://www.canva.com/photos/MAFHfE3RSy0/
Pixel art happy girl group character⁠ from Patinya_P_ANG on Canva.com https://www.canva.com/photos/MAFs6D_S9Rs/
Star Pixel Art⁠ from chickchick on Canva.com https://www.canva.com/photos/MAGSKDopQAg/
Concrete wall⁠ by Xurzon from Getty Images Pro on Canva.com https://www.canva.com/photos/MADesbL5SK8/
Base image for the main text background edited from image listing https://www.ebay.it/itm/314175660736 

### ACKNOWLEDGEMENTS