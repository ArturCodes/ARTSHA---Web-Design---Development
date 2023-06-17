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

.included-container {
height: auto;
padding-bottom: 25px;
margin-top: 50px;

        h2 {
            color: white;
            font-size: clamp(1.5em, 10vw, 3em);
            margin: 50px 0 25px 0;
            position: relative;
            overflow: visible;

            span {
                color: #38C6E5;
            }
        }

        .included-items {
            display: flex;
            flex-direction: column;
            z-index: 1;
            height: auto;
            max-width: 500px;
            margin-bottom: 50px;

            .item {
                padding: 0 12.5vw;
                text-align: left;
                margin-bottom: 25px;

                &::before {
                    content: '';
                    background-image: url('./images/check.png');
                    display: block;
                    position: relative;
                    top: 23px;
                    left: -30px;
                    background-size: contain;
                    width: 20px;
                    height: 15px;
                }

                h3 {
                    width: auto;
                    color: white;
                    padding-bottom: 5px;
                    position: relative;
                    text-align: left;
                    line-height: 1.75;
                    display: block;
                    text-decoration: solid underline white 1px;
                    -webkit-text-decoration: solid underline white 1px;
                    text-underline-offset: 5px;
                    -webkit-text-underline-offset: 5px;
                }

                p {
                    color: white;
                    max-width: 300px;
                }
            }
        }

        a {
            border-radius: 7.5px;
            border: 1px solid #38C6E5;
            color: #38C6E5;
            min-width: 100px;
            padding: 20px 30px;
            text-align: center;
            align-self: center;
            font-weight: 700;
            transition: 0.3s;
            box-shadow: 1px 1px 5px #1a1a1a;

            &:hover {
                background-color: white;
                color: #1a1a1a;
                transition: 0.3s;
                border: 1px solid #1a1a1a;
            }
        }

    }
