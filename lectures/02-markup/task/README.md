# Lecture Html/Css
### [Presentation](https://docs.google.com/a/paralect.com/presentation/d/1zaKFEHrq8PFb8ZLdPHuYJzV7sgdbURaPl0x-PDBlIs0/edit?usp=sharing)
## Tasks:
1. **Create a landing page layout with bootstrap**
	* navbar with brand and navigation bar
	* sign in /sign up form (simple form or form in modal)
	* call to action (button)
	* services (grid blocks)
	* testimonials (grid blocks)
	* footer
2. **Adaptive layout for landing page**
	* resolutions (320 - 1920)
3. **Customize navbar and buttons**
	* must be changed background colors for navbar and hover effects for navigation items (using transition)
	* customize the "call action" button (color, size, hover effects (using @keyframes))

## Further Study
* [bootstrap](http://getbootstrap.com/)
* [specificity](http://cssspecificity.com/)
* [animations "CSS-Tricks"](https://css-tricks.com/almanac/properties/a/animation/)
* [animations "W3C School"](http://www.w3schools.com/css/css3_animations.asp)
* [less](http://lesscss.org/)
* [BEM](https://ru.bem.info/)


## How to install NVM
Run this command into your terminal:  
``curl https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash``  
You'll see some output fly by, and then **nvm** will be installed. Now close and reopen your terminal to start using **nvm**  
It's not actually necessary to log out, we just need to make sure that the changes **nvm** made to your path are actually reflected, so just do:  
``source ~/.profile``  
Alternatively, run the command suggested in the output of the script. Now type:  
``nvm ls-remote``  
You'll be shown a list of all the available versions of node.js. You can always find out the latest stable release by heading to the node.js website, where it's printed in the cetner of the page.  
To install version **6.2.2** (the latest as of this writing) type:  
``nvm install 6.2.2``  
If you type:  
``node --version``  
You'll now see that node v6.2.2 is installed and active. If you had an older node app that only works with node v4.0.0, and wanted to downgrade, then you would input:  
``nvm install v4.0.0``  
to install and switch to v4.0.0:  
``nvm use v4.0.0``