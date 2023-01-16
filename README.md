# Antonio de Gou portfolio website.

A responsive website showcases Antonio de Gou's Full Stack Software portfolio.

![Antonio de gou is responsive](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/responsive-mockup.jpg)


Visit the deployed site: [Antonio de Gou webpage](https://antoniodegou.github.io/web-portfolio-mod1/)

![GitHub last commit](https://img.shields.io/github/last-commit/antoniodegou/web-portfolio-mod1?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/antoniodegou/web-portfolio-mod1?style=flat-square)



## CONTENTS


* [User Experience](#user-experience-ux)
  * [Initial discussion](#initial-discussion)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General](#general)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)


* [Testing](#testing)
  * [Automated testing](#Automated-testing)
  * [Manual testing](#Manual-testing)

* [Credits](#credits)

- - - 

## User Experience (UX)

### Initial Discussion

This project showcases the web Antonio de Gou's Full Stack Software portfolio and his introduction as a programmer. 
Antonio has the goal of entering the tech industry, and a portfolio is an essential tool that aims at professionals in the tech industry, such as employers, recruiters and other relevant peers.
There are a few goals from the get-go, it has to look professional, pixel perfect, showcase Antonio's personality, and ensure all the information is relevant and easy to find.


#### Essential information for the website

1. Relevant information about Antonio.
2. Tech skills.
3. Portfolio, code projects.
4. Contact (form and relevant social media).
5. Downloadable CV.

### User Stories

#### Client goals and first-time visitors

* To get all relevant information about Antonio.
* Contact Antonio through social media, email or form.
* Get the look and feel of personality through graphic design.
* See the essential projects Antonio has worked on.

#### Returning Visitor

* Have updated projects at all times.
* Easy way to contact or connect to social media.



## Design

### General design choices

The portfolio is a one-page design and separates all the information into sections.
The aesthetics are based on business cards with round corners, shadows and organised information by columns. 
The design is bold with a friendly side; the data is precise, and through Modals, more information and be unfolded.

### Colours 

![Colours I used](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/colours.jpg)

Sage and lemon combine to inspire stability and professionalism with friendliness and approachability. I worked out the colour scheme using Adobe Illustrator. The Design heavily relies on gradients, so blending the colours makes the look smoother, and the contrasting colours go together way better.


### Typography

![Fonts I used](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/fonts.jpg)

I chose the fonts from [Fontshare](https://fontshare.com/), which has a curation of web fonts that are very design oriented. 
"Cabinet Grotesk" is a very detailed but sober font used for titles.
"Satoshi" is minimal with round lines, ideal for longer texts.
Both of these fonts have an interesting contrast between them.


### Imagery

![Assets i created](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/design-assets.jpg)

I based the design on geometric shapes, so all images are visual vector assets I made in Adobe Illustrator. They were then exported in SVG format and integrated into the HTML document. 
There is also a picture of Antonio in the about section. 


### Wireframes

I made the Wireframes with the Balsamiq App and projected three sizes from desktop to mobile.

<details>
<summary>See Desktop</summary> 

![Desktop Mockup](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/mod1-desktop.jpeg) 


</details>

<details><summary>See Tablet</summary> 

![Tablet Mockup](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/mod1-tablet.jpeg) </details>

<details><summary>See Mobile</summary> 

![Mobile Mockup](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/mod1-mobile.jpeg) </details>

## Features

I put all sections into one page with smooth scrolling: the header, about, skills, portfolio, contact and footer.

All Pages on the website are responsive and have the following:

### General

* A favicon and title in the browser tab.
* A logo on the left of Antonio.
* Smooth scrolling from that works in all browsers.
* Several SVGs integrated into the HTML file at times with animation.
* A scrollbar that is styled.
* Responsive in all sizes.
* A decorative half circle in different positions using pseudo-selectors.



![browser info](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/favicon.jpg)

![Style scrollbar](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/scrollbar.jpg)

### Sections

#### Header (opening section)

The opening section has both the menu and the header portion.
The menu has a logo on the left and the menu items on the right. When on mobile, the menu becomes an off-canvas menu.
The header comprises an SVG animation on the right and a card with the information on the left.
 The animation is a simple metaphor for a system with rotating shapes and a "*gou.init()*" text simulating the initiation of a program.
The title card had the name as a title, the professional title and a small piece of information about Antonio's website.

![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/01header.jpg)

#### About

The about section is about Antonio.
It has a picture of Antonio on the left with a composition of shapes that matches the website aesthetics. 
On the right is a title, a short description of Antonio and a button that opens a modal with more information about Antonio.

![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/02about.jpg)


#### Skills

A grid system organises the skills.
There's a short introduction and lists of Languages, Libraries and other tools that Antonio has worked with.
There is a shorter comment on languages and libraries that Antonio has used in his Generative art hobby.
A decorative element that is coherent with the website.
There is a faded field with less relevant information about Antonio's skills as a generative artist, but still readable.

![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/03skills.jpg)

#### Portfolio

The most important part of the Website is the portfolio; for that reason, the design breaks from its normal flow and gets a different look.
Each project has a card in a carousel style that works on mobile with a horizontal scroll.
Each card has a button that opens a modal with more details about each project.
You can drag the portfolio with arrows or dragging, which works with the mouse and touch.

![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/04portfolio.jpg)

#### Form

The primary way of contacting Antonio, even though it's a static website with the help of Formspree, is a working form. Once the form has valid information (i used required for all fields), I receive an email at my address.

![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/05contact.jpg)

#### Footer

The footer has a repetition of the smooth scrolling menu, social icons and another opportunity of downloading the CV.
Also, an "all right reserved" text and symbol.
With the help of javascript, the year is continuously updated without the need to hardcode.


![Header](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/06footer.jpg)

### Future Implementations

* Have more complex projects on the portfolio
* Implement the website in React
* Ditch form spree and have a more robust implementation of server-side form.
* Ditch bootstrap to use Tailwind; it seems to be more of an industry standard.
* Substitute CDN use with a more streamlined approach with more advanced configurations of ViteJS.

---

### Accessibility

Accessibility has been considered since the inception of this project.

I used semantic HTML.
The buttons have a hover state. 
All the links have an Aria label.
The SVG has an Aria, title, and description to describe the image's purpose best.
The colours passed the contrast test on Wave.
I analysed with Wave and got Zero errors.
The Form has labels.


---

## Technologies Used

Balsamiq - For the wireframes.
Adobe Illustrator -  For the graphic design, design assets, and SVG export.
Git - Version Control.
GitHub - Host and save the website with version control.
Fontshare - Fonts for the website.
Visual Studio Code - Code editor.
Google Dev Tools - To troubleshoot and test features and solve issues with responsiveness and styling.
Favicon.io To create favicon.
Shields.io To add badges to the README.
Hoverify - responsiveness testing on several devices
freeformatter.com - to prettify HTML CSS and javascript files
ImageOptim - OSX app to compress images for README file

### Vite JS (Frontend Tooling)

Vite js is a great starter project; you can add any dependencies and have live reloading as you save your HTML or CSS. In addition, it updates all browsers automatically.
Some of their features go over my head, but one that gave me peace of mind was that it gets rid of any code that is not in use; for example, non of the bootstrap classes that are not in use do not get passed to the final CSS file. So that makes for smaller files. 
There is also a separation of production files and final files.
A lot of configuring can go into ViteJS; I integrated JS, CSS, and SVG as modules, so it bundles everything into a "docs" file.
All CSS and JS files are exported minimised to the docs folder; those are used for the deployed website. Those files are generated and are not to be used for coding.


### Languages Used

 HTML, CSS, JavaScript

As expected, I used HTML for structure, CSS for style and JavaScript for interactivity and functionality. Important to mention that there is heavy use of SVG for all graphic assets.


### Libraries Used

1. SASS

I decided to use SASS because I like their implementation of variables; I also appreciate having the ability to have several files organised.

2. Bootstrap v.5

My primary motivation for Bootstrap use was their grid system, spacing, and responsiveness; once I got the hang of it, it made it much faster to have all spacing work on all devices.
I also used their nav bar, off-canvas nav bar, and Modals to show more information as needed and keep a clean-looking website. 
The Bootstrap Icons library is also used for the portfolio's arrows and social links.


3. Formspree

I wanted a working form, but still, I can host it on GitHub; I found this solution that, with a bit of javascript, sends an email to me if someone uses the form.

4. Glider.js

In the design process, I wanted the portfolio section to have a different style than the rest of the website. 
I liked the idea of a carousel that scrolls horizontally, with arrows and dragging. Unfortunately, the BootStrap carousel didn't do exactly what I wanted, so I implemented the library glider that did precisely what I wanted. 

5. SVGInject

This small JS library came from the necessity of having my SVG's integrated into the HTML without bloating the HTML page. 
Even though there are many methods to do so without a library, it was very challenging to keep the CSS and the animation working whilst having separate files just for SVG. The only tag that allowed me to do that was <embed>, but not only does it seem deprecated, but it was also very ineffective for Accessibility purposes. So I resorted to this library that substitutes my <img> tags with their respective SVG. 



## Deployment & Local Development

You can find the working HTML, SCSS and JS at the root. The docs folder will be the output after the command "build". 
The SRC folder has all CSS modules, SVGs and fonts.
Node Modules have all the dependencies that ViteJS uses to work.
Vite.config.js is my configuration of the output files.
Package.json, you can find all the dependencies that I used.


### Deployment
The site is deployed using GitHub Pages - Antonio de Gou.

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, antoniodegou/web-portfolio-mod1.
3. Click the settings button.
4. Select pages in the left-hand navigation menu.
5. From the source dropdown, select the main branch, and press save.
6. The site has now been deployed; please note that this process may take a few minutes before the site goes live.

### Local Development
#### How to Fork
To fork the repository:

1. Login (or sign up) to Github.
2. Go to the repository for this project, antoniodegou/web-portfolio-mod1.
3. Click the Fork button in the top right corner.

#### How to Clone
To clone the repository:

1. Login (or sign up) to GitHub.
2. Go to the repository for this project, antoniodegou/web-portfolio-mod1.
3. Click the code button, select whether you want to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and paste the link you copied in step 3. Press enter.

#### When developing with ViteJS when cloned

##### Installing all dependencies

```
cd "folder of the project."
npm install
```

##### Getting started with live reloading
```
npm run dev
```
A link with the localhost will appear in the command line. Just click it, and you will be directed.

##### Install new dependencies

```
npm add -D "dependency"
```

##### Deploying

This will build all deployed files to the docs folder.

```
npm run build
```
You can have a preview of the website in the docs folder.
```
npm run preview
```

You can find the deployment settings in "vite.config.js" file at the project's root.




## Testing

### Automated testing

#### W3C validator

I used [W3C](https://muffingroup.com/blog/yellow-color-palette/) to validator the HTML. It was helpful for unclosed tags. And taught me not to use a closing slash on self-closing tags like <img> vs <img/>.

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/html-val.jpg)

This is referencing just my CSS.

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/css-val.jpg)

In the final style, I had to take bootstrap and bootstrap icons out of Vitejs integration. The CSS validator would throw several errors on the bootstrap file. After a google search, it is said that Bootstrap uses cutting-edge CSS, and it's normal not to pass CSS validation. 

My CSS code has no errors. However, it does have a few warnings on vendor selectors; I decided to use them anyway because I want consistency along all browsers.

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/css-warnings.jpg)


#### ViteJS

Due to its nature, it will not live-reload as soon as there is any error on CSS or javascript, and it also says where it found the error.

#### Chrome Lighthouse

I was able to get 100 on all fronts on Lighthouse.

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/lighthouse.jpg)

#### Wave

Even if Lighthouse has an accessibility check, I double-checked with Wave and got zero errors, including in contrast.

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/wave.jpg)


#### Form Spree
I used this test email. on email https://www.mail.com/
If you would like to test the form use these credentials:

email: antoniodegou.test@mail.com
password: &TsTUCv0E32r

### Manual testing

#### Functionality

##### Tools for testing

1. Macbook pro m1 2021
2. Google Chrome
3. Firefox
4. Safari
5. Hoverify (emulates an Extensive Mobile devices list)
6. Google Dev Tools
7. Huawei Mate 20
8. iMac 2019


##### Header

| Feature  | Expected Outcome | Testing Performed | Result  | Pass/Fail  |
|:----------|:----------|:----------|:----------|:----------|
| First 4 menu items    | Scroll to respective section   | Click    | Scrolled    | Pass    |
| Last 2 menu items    | open new tab with respective links    | Click   | Opens new tab   | Pass   |
| "Let's Talk" button    | Scroll to contact section    | Click    | Scrolled    | Pass    |
| "Download CV" button    | Open new tab to CV file    | Click    | Open new tab    | Pass    |

##### About

| Feature  | Expected Outcome | Testing Performed | Result  | Pass/Fail  |
|:----------|:----------|:----------|:----------|:----------|
| "more about" button   | Opens Modal   | Click    | Open Modal    | Pass    |

##### Portfolio

| Feature  | Expected Outcome | Testing Performed | Result  | Pass/Fail  |
|:----------|:----------|:----------|:----------|:----------|
| Arrows (left and right)  | scrolls porfolio horizontally   | Click    | Scrolls    | Pass    |
| Dragging portfolio items  | drags items left and right   | Touch and Drag    | Scrolls    | Pass    |
| "More about" buttons  | Opens respective Modals   | Click   | Open Modal    | Pass    |
| Hand Cursor  | hand cursor should appear on hover of projects  | Click   | Hand cursor    | Pass    |

##### Contact

| Feature  | Expected Outcome | Testing Performed | Result  | Pass/Fail  |
|:----------|:----------|:----------|:----------|:----------|
| Submit  | sends when valid fields   | Click    | Sends Email    | Pass    |
| Submit  | sends when invalid fields   | Click    | Throws error and generates message   | Pass    |
| Submit  | error on empty fields   | Click    | Throws error and generates message   | Pass    |
| Submit  | error on invalid email  | Click    | Throws error and generates message   | Pass but can only generate a small message at the bottom of the form   |

##### Footer

| Feature  | Expected Outcome | Testing Performed | Result  | Pass/Fail  |
|:----------|:----------|:----------|:----------|:----------|
| First 4 menu items    | Scroll to respective section   | Click    | Scrolled    | Pass    |
| social icons    | open new tab with respective links    | Click   | Opens new tab   | Pass   |
| "Download CV" item    | Open new tab to CV file    | Click    | Open new tab    | Pass    |
| year automatically updated in rights reserved   | correct year    | N/A   | correct year  | Pass    |

#### Responsiveness

##### Hoverify and google dev tools

I used Hoverify, which allows me to test several devices simultaneously in live time. 

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/hoverify.jpg)

At the smallest size of 320px, I detected only one minor bug in the skills section where the spacing is not consistent but still quite readable. 

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/web-portfolio-mod1/main/readme-images/skills-bug.jpg)

#### Bugs

I had to put the Modals out of the natural flow of the document; otherwise, some elements would be on top of the Modal.

Even following the tutorial, I couldn't make the styling of the scroll bar work on firefox.

The spacing in the Skills section at 320px responsive size is inconsistent but still readable.

In the form, if putting an email with a @ but without "." the validation throws an error but is inconsistent with the other errors. This is part of the Formspress library, and I couldn't find a way to fix it. The error shows below the form and not before the relevant field.

In Firefox, a horizontal scroll bar appears in the portfolio section, which is not part of the design. The other browsers work correctly.

I couldn't find a way to keep bootstrap bundled in my "style.css" and pass CSS validation. So I had to use a CDN so ViteJS wouldn't integrate the files.

Vite JS update all paths in the HTML CSS and JS files to work once exported to the docs file.
I couldn't configure ViteJS to update the href attribute inside the SVG files, so the "self. SVG" that has a picture in it had to have the same path in the dev environment and the docs file. That is why there is an Assets folder with a picture inside at the root instead of the src files with the other images.

I tried to use WebP format for the selfie, but it seemed to not work in not-so-old versions of safari, particularly iPhone 8 and before as well as some Ipads. I resorted to use PNG format. 



## Credits

### Design Inspirations 

I searched the web endlessly, but in the end, I decided to settle my design based on these two examples.


Design 1: [Design 1](https://muffingroup.com/blog/yellow-color-palette/)

Design 2: [Design 1](https://shop80004.elevategfx.com/content?c=design%20inspiration&id=4)


### Generators
Shadow Generator [here](https://shadows.brumm.af/)

Favicon generator [here](https://realfavicongenerator.net/)

Font End tool [Vite js](https://vitejs.dev/guide/)

Pretiffy [Pretiffy](https://www.freeformatter.com/html-formatter.html)

### CSS solutions

Half Circle on section backgrounds [here](http://jsfiddle.net/hashem/u78bQ/1/)

Centring in absolute positioning [here](https://medium.com/front-end-weekly/absolute-centering-in-css-ea3a9d0ad72e)

Triangle animation with rotation for class .cowmove [here](https://stackoverflow.com/questions/59300485/css-animation-moving-back-and-forth-with-rotation)

Button Styles [here](https://codepen.io/screenthink/pen/ZeOyjP)

Scroll Bar Styling [here](https://www.digitalocean.com/community/tutorials/css-scrollbars)

Pretiffy [Pretiffy](https://www.freeformatter.com/css-beautifier.htm)


### JavaScript Solutions

Get the current year dynamically on the footer [here](https://stackoverflow.com/questions/20903782/how-to-get-the-current-year-using-css)

Make SVG accessible [here](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/)

Functioning Form, tutorial in login dashboard [here](https://formspree.io/)

Instruction on SVG injection [here](https://github.com/iconfu/svg-inject)

