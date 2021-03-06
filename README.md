# Zemoga-UI-Test

This project was built with React (as our frontend framework) and NodeJS with mongoDB (as our backend).

## Live demo
Layout branch deployed with GitHub Pages, relate to the link below.

Layout: [Live Demo](https://lhernandezd.github.io/Zemoga-UI-Test/)

## Technologies

- JS and Web api (es6 +)
- React (Version 16.13.1)
- NodeJS (Version 14.3.0)

## Branches

The projects is divided in 3 branches:

- **layout**: Branch with the HTML and CSS structure for the project.
- **interactive:** Branch that contains the interactive of the project (React and NodeJS).
- **master:** Branch that contains the entire project.

**Note:** To run this project is mandatory to have installed git, nodeJS and mongoDB.

## Getting Started

### React - NodeJS

1. Clone the repository

        git clone https://github.com/lhernandezd/Zemoga-UI-Test.git

2. Enter the project route

        cd zemoga-ui-test

3. Install all the dependencies

        npm install

4. Create and .env file in the root of the project, using as a base the file .env.example
5. Run the NodeJS server

        npm run server

6. Fill the database with initial data (candidates)

        npm run fillDatabase

7. Run the Frontend

        npm run dev

8. Run the E2E test

        npm run cy:run
