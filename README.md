# Restrantr

* A program that collects user preferences and suggests restaurants based on said input.

#### February 2, 2017

#### By **Jason Brown, Ash Laidlaw, Matt Kelley, Jake Campa**

## Description
  Users enter a cuisine, price range, vibe, delivery or not, desired libations and Restrantr suggests restaurants catered to user input.

| Behavior | Input Example | Output Example |
|----------|---------------|----------------|
| User sees splash page, hits 'submit' button.  Program displays selections for user to choose from. | submit | Form page loads. |
| User enters name | "Bob" | "Bob, based on your suggestions, we recommend these restaurants:" |
| User selects price range. | $, $$, $$$, or $$$$ | Stores value of input as 1, 2, 3, or 4, and connects that value to the restaurant's price value. |
| User selects cuisine preferences. | Mexican and Thai. | Stores values of input as "mexican" and "thai" and connects that value to the restaurant's cuisine value. |
| User selects the vibe of the restaurant (modern, casual, etc). | Fancy | Stores value of input as "fancy" and connects that value to the restaurant's vibe value. |
| User selects whether he/she would like delivery.| Yes, user would like delivery |  Stores value of input as "yes" and connects that value to the restaurant's delivery value. |
| User selects whether the restaurant has a full bar, only wine/beer, or it doesn't matter. | Full bar | Stores value of input as "full-bar" and connects that value to the restaurant's libations value. |
| Stores all values, matches user preferences with restaurants. | User clicks submit. | Shows user a list of five restaurants that may be the best fit.|
| User clicks on a restaurant name. | User clicks on the name of a restaurant(s). | Information about the restaurant will appear below the name, including address, phone number, etc.
| When a restaurant name is clicked, a photo will appear to the right. | User clicks on the name of a restaurant. | Photo of that restaurant will appear to the right. |


## Setup/Installation Requirements

*  https://github.com/mkelley2/restaurant-selector
*  Clone github repository for restaurant-selector webpage
*  Open index.html in web browser window_

## Known Bugs
_No known bugs exist._

## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_
* _JQuery_

### License
*MIT

Copyright (c) 2017 Jason Brown, Ash Laidlaw, Matt Kelley, Jake Campa All Rights Reserved.
