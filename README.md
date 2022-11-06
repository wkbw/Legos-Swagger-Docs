# Pac-Man Movement Exercise

###### This README file is a companion to the Pac-Man Exercise completed during Week 4 of the Professional Certificate in Coding Cohort. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#steps-to-create">Steps to Create</a></li>
    <li><a href="#how-to-run">How to Run</a></li>
    <li><a href="#roadmap-of-future-improvements">Roadmap of Future Improvements</a></li>
    <li><a href="#learning-insights">Learning Insights</a></li>
    <li><a href="#license-information">License Information</a></li>
  </ul>
</details>

## Description
The goal of this project is to use the *setInterval()* method with an array to control the movement of a Pac-Man image. Starter html, js, and image files were provided but the simulation of movement needed to be added to the JavaScript file. The steps to complete this project follow:

## Steps to Create 
* Add a JavaScript *setInterval()* method to call the *Run()* function every 200 milliseconds.
* Add an extra argument to the *Run()* function to replace *null* with *pageWidth*.
* Add conditions to the *checkPageBounds()* function to move Pac-Man one direction, then reverse direction once it hits the page width boundary.

## How to Run
* To run, open ___index.html___ and watch as Pac-Man begins his trip.
* First, he moves at a measured pace to the right until he reaches the right edge of the browser window. Once that happens, Pac-Man appears to reverse direction then chomps his way back across the screen to the left until he reaches the left edge of the brower window. Pac-Man flips then starts his chomping march to the right all over again.
* For a bit of added fun, resize the browser window so Pac-Man’s back and forth jaunt is shorter each way.


## Roadmap of Future Improvements
Some ideas to take Pac-Man’s trip to the next level:

* Increase Pac-Man’s speed by changing *setInterval(Run, 200)* to *setInterval(Run, 50)* and watch as Pac-Man veritably flies across the screen, just like the video game!
* Have Pac-Man’s course change so he changes direction to follow mouse clicks across the screen.
* Add more characters so Pac-Man has someone to chase across the lonely screen.

## Learning Insights

Learning how to make Pac-Man move and chomp back and forth across the screen was fun. However, what I really learned was how to work through the exercise, carefully reading through the comments, picking up on nuances in the wording, googling all terms, and always, always use console.log() to check your code and to ensure anything you write works before moving onto the next step.


## License Information
[This Pac-Man project is licensed under the MIT License](https://github.com/wkbw/Pac-Man/blob/main/LICENSE).


