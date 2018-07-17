# Wassily

Wassily is a React app that utilizes the Last.fm API. On the homepage, the user searches for an artist. They are then taken to a page where the specified artist's albums are displayed. From there, they can generate a selection of various artists' album covers that share a similar palette. Wassily was named for Wassily Kandinsky, the Russian Expressionist and noted synesthete. Synesthesia is the phenomenon in which one sense triggers another. Chromesthesia, a form of synesthesia, is the association of sounds with colors.

![Imgur Image](https://imgur.com/LZo0mqe.jpg)

## User stories:
As an artist, I want to see famous albums’ cover art grouped by color, so that I can make comparisons  to my own.

As a curious person, I want to see album cover art grouped by color, so that I can explore correlation between sound and art. 

## Wireframes: 
Home:

![Imgur Image](https://imgur.com/TkiWqgJ.jpg)

Album Display:

![Imgur Image](https://imgur.com/0Ze8BWu.jpg)

## Tech:
 - Built with React.js. 
 - Last.fm API. 
 - react-palette

## Challenges: 
- Extracting colors. I used react-palette to extract the promiment color from the cover art url that is specifed by the user. I then set a button's background color to this value. window.getComputedStyle allowed me to extract the rgb value the color, which I then passed as an argument in an algorithm I wrote to find the closest colormatch to the color from a list of colornames supported by all browers. 

![Imgur Image](https://imgur.com/rltD3bc.jpg)

- Building a resource of comp images. I struggled to find an API of albums that included cover art. I ended up using my own app to search for prominent artists, and using the map() method to console log the colornames and urls for multiple albums at once, then formatting that into a json file.

## Future endevors: 
- Improve UX. Currently, the app is not very intuitive. 
- Allowing a user to upload their own image. 
- Finding an alternative to react-palette. react-palette extracts the most vibrant color from an image - I would rather extract the color based on how many pixels it occupies.  

## Screenshots:
Home:  

![Imgur Image](https://imgur.com/rYCLHLh.jpg)

Search:

![Imgur Image](https://imgur.com/sfVxAzd.jpg)

Before Comps: 

![Imgur Image](https://imgur.com/aZ4yF9w.jpg)

Comps: 

![Imgur Image](https://imgur.com/j15qlV8.jpg)

## Installation instructions: 
- npm install
- npm start
