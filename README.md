# URBAN INVADERS
![Responsive Urban Invaders](README-folder/other-assets/responsive-invaders.png) 

The deployed website can be found here: [Urban Invaders](https://osoriomica.github.io/invaders/index.html)  

## Introduction
 

Urban Invaders is a playful take on the street art by French artist Frank Slama and the original Space Invaders arcade game.

It’s become a personal habit of mine to photograph (or shoot) these Invader installations whenever I happily come across them whilst walking on the streets of my city or as a tourist somewhere else.  
This project comes from a mix of arcade nostalgia, my interest in street art and our modern compulsive need of capturing stuff in photos. The user controls the shooter as usual, but on this occasion, they are tourists with their cameras shooting photos of the invaders crawling down a building. I hope to capture some of that original fun with a twist on my version of Space Invaders. 

![collage of photos of Invader's installations around Paris](README-folder/other-assets/collage-photos.jpg) 

### About the original Space Invaders:
![poster of original Space Invaders](README-folder/other-assets/space-invaders-flyer-1978.jpg)  
[Image by Arcade Museum](https://en.wikipedia.org/w/index.php?curid=41622028), Fair use.

Released in 1978 by Taito Corporation, and designed by Tomohiro Nishikado; [Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) is considered one of the most influential and greatest games of all time. After almost half a century since its origins, it has continued to be a part of the pop culture across the globe, inspiring people daily with its simplicity and iconic design. 

### About Frank Slama (AKA Invader)
One of my favourite street artists, Franck Slama (AKA Invader) has given the famous alien invaders and their unmistakable pixelated art a new life by installing, pixelated ceramic tiles on public walls around the world. His artwork features the invaders as well as other famous characters from old-school video games like Mario Bros and Pac Man. 
- See space-invaders website for more info on his work: (https://www.space-invaders.com/home/).

![Frank Slama AKA Invader](README-folder/other-assets/invader-portrait.jpg) [By Julie - Own work, CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=50343315)

## User Experience

### User stories
Space Invaders recalls the nostalgia for the Golden Age of arcade games but also, it’s a simple and fun game to play. 
Therefore, the user of this website is someone who'd like to play a quick shooting game based on Space Invaders. Or someone who shares the interest (or maybe has just come across) an installation by Invader.   

- As a user, I’d like to understand how to play the game.
- As a user, I’d like to play the game with simple controls.
- As a user, I would like to easily start a new game.
- As a user, I’d like to choose my shooter.
- As a user, I’d like to be able to pause, resume and/or start a new game.
- As a user, I’d like to control the audio effects/background music.  
- As a user, I’d like to know my score at the end of the game.
- As a user, I’d like to know if I’ve lost or won the game. 

### Features
Layout: The website is presented in two pages. The homepage and the game page. The focus relies on the game as the main feature. 
#### General features across the site:
- The logo, title and navigation menu with two links: Home and Play Urban Invaders.
- A simple footer with social media icons to open in a new tab facebook and instagram websites.
#### Homepage: 
- Welcome message: the homepage has a simple welcome message styled like a French road sign (blue background, white inner border and text written in white uppercase -but with an arcade-inspired font).
- Instructions: the welcome message offers quick instructions on how to play the game. 
- Link: to the game page. 
#### Game page:
- Modal: on page load, a bootstrap modal is displayed with 3 shoooter options to choose before starting the game.  
- Button to close the modal reads "Start Game”.
- Score display: below the navigation menu, centered with yellow text for contrast. The game over or winning messages are updated on the same line.
- Game Options: Two buttons below the score and above the game’s grid: New Game and Pause/Resume.
- Game Board: on a square box with dark semi transparent background. The invaders and the shooting camera are placed within. 
- Game Controls: Big arrow buttons and the selected shooter are placed directly below the grid. The user can play without a keyboard using these buttons.  
- Sound controls: The user can click on the audio icon to toggle the sound on and off.
##### Game Logic: 
- On game start, the shooter is placed at the bottom centre of the grid. The grouped of invaders appear at the top left corner and start moving side to side, descending towards the shooter.
- Using Left and Right arrows (on keyboard and on screen), the user can move the shooter side to side but not past the edge of the grid. 
- Using the Up arrow or the spacebar on the keyboard (or clicking on the shooter's icon on screen), the user can fire against the invaders. 
- Each time the shooter hits an invader, it disappears and the score is increased by one. 
- The game is won by destroying all the invaders before they touch the shooter or the bottom of the grid.
- The game is lost if the invaders reach the shooter or the bottom of the grid. 
- Game Over: the end of the game. The score display is updated with the final score and a Congratulations! Or Game Over message. 

	#### Possible features to add in a future deployment:
	- Scoreboard with a top 10 of the highest scores and the user’s initials. 
 	- Boss to increase difficulty of the game. Random math drop bomb to shooter? (Nice to have if more time)
	- Share score to social media.
	- Report an issue link to write an email to developer. 
	- Option to add levels of difficulty (faster invaders, bosses, etc)

### Design	
The overall design is inspired by the original arcade aesthetic and Invader’s street art installations (see introduction).
The colour palette is high-contrasting and the text elements easy to read.
The buttons and links are formatted so that the user can interact intuitively.

- Colour Palette: 

	| Color      | Hex                                         | Name                             |
	| ---------- | ------------------------------------------- | ---------------------------------|
	| ![#252c3f](https://placehold.co/15x15/252c3f/252c3f.png) | #252c3f | Space Cadet |
	| ![#ff9f1c](https://placehold.co/15x15/ff9f1c/ff9f1c.png) | #ff9f1c | Orange Peel |
	| ![#dddddd](https://placehold.co/15x15/dddddd/dddddd.png) | #dddddd | Antiflash white | 
	| ![#102542](https://placehold.co/15x15/102542/102542.png) | #102542 | Oxford Blue |
	| ![#d10003](https://placehold.co/15x15/d10003/d10003.png) | #ba0003 | Enginneering Orange |

- Typography. Chosen for its pixelated styles to emulate an arcade's game -imported from Google Fonts: 
	- Press Start 2P: Headings and highlighted buttons.
	- Jersey 15:  General text elements. 
- Sounds and music: pixabay.com. The sounds are within a javascript object so there's room for future expansion.
- Graphics: SVGs edited from canva.com - all characters have a pixelated style to resemble the Space Invaders game and Invader's art installations.
- Background: A shot of a street in Paris. Photo taken and edited by the developper.  
- Text signs: Styled to resemble the French road signs to continue the idea of street art.

## WIREFRAMES  
I used canva.com for the overall design and the [mock-up process](README-folder/wireframes/canva-mockups). These wireframes then allowed me to start experimenting with the colours and visual elements such as the svgs used across the site. 

### Information Architecture diagram
<details>
<summary> Please click here to open the <strong>MOBILE WIREFRAMES:</strong>  </summary>

![index wireframe on mobile](README-folder/wireframes/mobile-wireframes/mobile-index-wireframe.jpg)  
![invaders wireframe turned into mockup](README-folder/wireframes/mobile-wireframes/mobile-invaders-design-wireframe.jpg)
![404 mobile wireframe](README-folder/wireframes/mobile-wireframes/mobile-404-wireframe.jpg)
</details>

<details>
<summary>Please click here to open the <strong>LARGE SCREEN WIREFRAMES:</strong> </summary>

![index wireframe on large screens](README-folder/wireframes/large-screen-wireframes/index-wireframe.jpg)
![invaders wireframe -large screens](README-folder/wireframes/large-screen-wireframes/invaders-game-wireframe.jpg)
![invaders modal wireframe - large screens](README-folder/wireframes/large-screen-wireframes/invaders-modal-wireframe.jpg)
</details>

### Technologies used:
- Languages: HTML5, CSS3, JS 
- Bootstrap 5.2.3 - to enhance the visual appearance of the website as well as the [built-in modal component](https://getbootstrap.com/docs/4.0/components/modal/) used alongside custom CSS styles
- GitHub - to host the project  
- Visual Studio Code - IDE connected to github codespaces
- Google Fonts - Find and import font families
- canva.com - Create, edit and export [sprite elements](https://www.canva.com/design/DAGcibDIbGE/Kb27D79L8M__OToY9XiEmg/edit?utm_content=DAGcibDIbGE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton). [Draft wireframes and overall design](https://www.canva.com/design/DAGcSUaYHVU/TzfS5spG1CXN-vaJxABJHw/edit?utm_content=DAGcSUaYHVU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) before translating it to html/css code.
- pixabay.com - to download free sound effects
- coolors.co - Create the colour palette
- Font Awesome - arrow icons on index.html and social icons on footer
- cloudconvert.com - convert and optimise images for the web
- mdn web docs - for general coding reference: Loops and iteration, audio(), working with objects, etc.
- Lighthouse - to improve site's general score by following their suggestions on performance, accessibility, best practices and SEO 
- prettier.io - to beautify the js and css code
- Google's Inspect Element - to debug code and see console logs and errors

## TESTING
### HTML Validation
- Homepage:  
[link to html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Findex.html)  
- Invaders:  
[Link to html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Finvaders.html) 
- 404:   
[link to html validotr](https://validator.w3.org/nu/?doc=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2F404.html)  
![screenshot of html validation](README-folder/validation/html-validation.png)
### CSS
- W3C CSS Validation: [Link to css validator](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fosoriomica.github.io%2Finvaders%2Fassets%2Fcss%2Fstyle.css&usermedium=all&vextwarning=&warning=1)  

![CSS validation screenshot](README-folder/validation/css-validation.png)
          
### JS 
app.js was tested using (https://jshint.com/). Three directives were added at the top of the js file to inform JSHint about the use of bootstrap (global bootstrap), to ignore the missing semicolons (-W033), and the use of the esversion: 8 (so that let and const were not flagged). No warnings were thrown after this.
![JSHint analysis](README-folder/validation/jshint-validation.png)

### LIGHTHOUSE
The website was tested with Google Chrome's Lighthouse
- Homepage:   
![screenshot of code analysis](README-folder/validation/lighthouse-index.png)
- Invaders:  
![screenshot of code analysis](README-folder/validation/lighthouse-invaders.jpg)
- 404 -due to its error nature, the general score was affected:  
![screenshot of code analysis](README-folder/validation/lighthouse-404.png) 

### Testing user stories
- As a user, I’d like to understand how to play the game:
- As a user, I’d like to play the game with simple controls:
- As a user, I would like to easily start a new game:
- As a user, I’d like to choose my shooter: 
- As a user, I’d like to be able to pause, resume and/or start a new game:
- As a user, I’d like to control the audio effects/background music:
- As a user, I’d like to know my score at the end of the game:
- As a user, I’d like to know if I’ve lost or won the game:

### Fixed Bugs
- Navbar toggle not behaving properly. Issue: Target was not set to correct ID. Fix: Using bootstrap’s documentation, I made sure both the parent’s data-bs-target and the id of its descendant div were the same.  
- Background image on .main-text-bg not displaying responsively. Issue: The text would overflow the container and the image was not growing with its parent div. Fix: set width to 100%, and height to 100vh so the text would stop overflowing and the image would occupy the full width of its container.
- Start game modal closing but not initialising game. The default setting for bootstrap's modal allows the user to click outside the modal to dismiss it, but if the user did this instead of pressing the start game button, the setInterval was not being updated by the startGame(). Fix:  Set backdrop to static (the modal will not close when clicking outside of it) to force the user to click on the Start Game button.
- Function restart - button event doesn't reset the game state properly. Score goes back to 0 but Invaders continue moving. Expected: As well as the score/results display, the remaining invaders should disappear and reappear in their initial position with original numbers. Fixed: use the built-in method location.reload() to reload the page, and reset the game state to its original status.
- ToggleSound function not loading audio within new soundsList object. Fix: update if statement to include the object via dot notation: boomSFX.play() => soundsList.boomSFX.play() 

## DEPLOYMENT
## CREDITS
### Code
- The base javascript code for the game comes from Ania Kubów: (https://youtu.be/s6LrpUTQQn0?si=DZ24tUrVomU48pgm)
- GameOver on reaching the bottom row by SCollins: (https://github.com/SJECollins/ci-pp2-pixels-arcade/tree/main)
- Audio() constructor: (https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio)
	
### Media
- Invader cut out and edited from photo by Guilhem Vellut from Paris, France. https://www.flickr.com/photos/o_0/28023125416/  
- Pixelated camera icon⁠ edited from the original by Rara nia nur hanifa on Canva.com https://www.canva.com/icons/MAFYvLietmQ/  
- Star Pixel Art⁠ from chickchick on Canva.com https://www.canva.com/photos/MAGSKDopQAg/  
- Road sign image edited from image listing https://www.ebay.it/itm/314175660736  
- Shooter1 based on the artwork byt Patinya_P_ANG on Canva.com https://www.canva.com/photos/MAFs6D_S9Rs/  
- shooter2 made using Pixel art green retro hat by Patinya_P_Ang from Patinya_P_ANG https://www.canva.com/photos/MAFrmC84tXI/
- shooter3 cat pixel by FranGeL Katerns https://www.canva.com/icons/MAGRfqjLFK4/

#### Sound effects: 
- Camera capture sound effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6448">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6448">Pixabay</a>
- negative_beeps sound effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6008">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6008">Pixabay</a>
- success sound effect by <a href="https://pixabay.com/users/updatepelgo-44563794/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=221935">UpdatePelgo</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=221935">Pixabay</a>

### ACKNOWLEDGEMENTS
