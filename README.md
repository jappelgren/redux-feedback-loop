# Feedback Form

## Description

This project is a simple feedback form built as a single page application using react-router, modeled off the form all students of Prime Digital Academy fill out every night. The form was created with React, Redux, and styled using Material-UI. The app is full CRUD. All data collected is stored in Redux. When the user confirms that they have entered all information correctly, the data is posted to a database. An admin page exists at [localhost:3000/#/admin](localhost:3000/#/admin). On this page a user is able to review all feedback entries stored in the database (GET). The administrator can flag feedback for further review (PUT) and delete feedback if it is no longer needed (DELETE). I came into this project knowing I would be using Material-UI to style, I implemented the Material components from the start which made the process easier than going back and editing all the JSX tags.

When a user loads the page they will answer 3 questions on a scale from 1 to 5. Those questions are "How are you feeling today?", "How are you understanding the content?" and "How well are you being supported?". The next button will be disabled until the user makes a selection. A user can use the previous button to go back and re-answer the previous question. After the three ratings pages the user is required to provide some type of written feedback. When all answers have been finished the user is able to review their answers and edit any they may have answered incorrectly. When the user is directed to the the question they intend to edit, logic is implemented to take them back to the confirmation page completion instead of making them refill out the entire form again.

When the user is happy with their answers they can click the submit feedback button. This posts the information to the server. The user is sent to a thank you page and can click a button to start the form over to leave new feedback.

## Installation

To get the app up and running on your machine follow these steps.

1. Clone repo onto your machine with the `git clone https://github.com/jappelgren/redux-feedback-loop.git` command.
2. Create a database named `prime_feedback`.
3. Use the database schema provided in `data.sql`.
4. Run `npm install` to install all necessary dependencies.
5. `npm run server` to start the server.
6. `npm run client` to start the client.
7. In your browser go to [localhost:3000](http://localhost:3000/).

## Usage

Go to localhost:3000. You will be greeted with your first question. Answer all questions and submit. If you would like to see the admin page navigate to [localhost:3000/admin](http://localhost:3000/#/admin).

## Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://material-ui.com/)
- [PG](https://node-postgres.com/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React-Router](https://reactrouter.com/)
