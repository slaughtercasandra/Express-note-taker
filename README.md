
#Note Taker

A note-taking application built with Express.js for small business owners to organize their thoughts and tasks efficiently.
The Note Taker application is designed to provide users with a simple yet powerful tool to write, save, and organize notes. Leveraging Express.js on the backend, notes are stored and retrieved from a JSON file, offering seamless access to previously saved notes. This application fulfills the need for small business owners and individuals alike to keep track of tasks, ideas, and important information.

##Table of Contents

Description
User Story
Acceptance Criteria
Mock-Up
Features
Getting Started
Installation
Usage
Routes
Technologies Used
License
Description


##User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
Acceptance Criteria

User is presented with a landing page containing a link to the notes page.
Clicking on the notes link takes the user to a page displaying existing notes on the left and fields to enter a new note on the right.
User can enter a new note title and its text, and Save and Clear Form buttons appear.
Clicking Save adds the new note to the list of existing notes and removes the buttons from the navigation.
Clicking on an existing note displays it in the right-hand column, and a New Note button appears.
Clicking New Note presents the user with empty fields to enter a new note title and text.
Note-taking functionality operates smoothly and intuitively.
Mock-Up

##Features

Create, save, and organize notes efficiently.
Intuitive user interface for seamless note-taking experience.
Easily navigate between existing notes and create new ones.
Responsive design for optimal user experience across devices.
Getting Started

To run the Note Taker application locally, follow these steps:

##Installation
Clone this repository to your local machine.

Navigate to the project directory in your terminal.

Install dependencies by running:
npm install
Start the server by running:
npm start
Open your preferred web browser and navigate to http://localhost:3001.

##Routes

HTML Routes
GET /notes: Returns the notes.html file.
GET *: Returns the index.html file.
API Routes
GET /api/notes: Reads the db.json file and returns all saved notes as JSON.
POST /api/notes: Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client.

##Technologies Used

Express.js
Node.js
JavaScript
HTML
CSS
License

This project is licensed under the MIT License.

