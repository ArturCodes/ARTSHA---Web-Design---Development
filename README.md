# myArtsha

Affordable Websites For Small Business

# media screens

@media only screen and (min-width: 0em) {}
@media only screen and (min-width: 48em) {}
@media only screen and (min-width: 64em) {}  
@media only screen and (min-width: 1300px) {}

@media screen and (min-width: 0px) {}
@media screen and (min-width: 0px) and (max-width: 0px) {}

# Colors

Blue - #38C6E5
Green - #7FD378
Purple - #804DD4
Red - #D44D4D
Orange - #E38025
yellow - #ffcc00
Background - #3F3B51

# Variables

$background: #3F3B51;
$blue: #38C6E5;
$green: #7fd378;
$purple: #804DD4;
$red: #D44D4D;
$yellow: #ffcc00;
$black: black;
$white: white;

# After Image

&::after {
display: block;
content: '';
position: absolute;
background-image: url('./images/plant.png');
background-size: contain;
background-repeat: no-repeat;
width: 100%;
height: 100%;
bottom: 0px;
left: 0px;
opacity: .5;
}

# Button Effect

a {
background-color: $yellow;
color: $black;
box-shadow: 1px 2px 0 darken($yellow, 5%), 2px 4px 6px darken($background, 25%);
border-radius: 7.5px;
width: 150px;
padding: 15px 30px;
margin: 15px;
z-index: 888;
transition: 0.2s;
}

a:hover {
color: $white;
transition: 0.2s;
box-shadow: 1px 2px 0 darken($yellow, 5%), 3px 6px 6px darken($background, 25%);
}
