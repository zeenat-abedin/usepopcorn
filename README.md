# usePopcorn: A Movie Search and Analysis App

## Introduction

usePopcorn is a React application that allows users to search for movies, view movie details, and track their watched movies. The app features a search bar, movie list, and a summary of watched movies.

## Getting Started

To get started with usePopcorn, clone the repository and install the dependencies:

```
git clone https://github.com/username/usePopcorn
cd usePopcorn
npm install
```

Once the dependencies are installed, you can run the development server:

```
npm start
```

The app will be available at http://localhost:3000.

## Code Overview

The code for usePopcorn is organized into several components:

- `App.js`: The main component of the app. It contains the state and logic for the search bar, movie list, and watched movies summary.
- `MovieList.js`: A component that displays a list of movies.
- `MovieSummary.js`: A component that displays a summary of watched movies.
- `Search.js`: A component that allows users to search for movies.

## App.js

The `App.js` component is the main component of the app. It contains the state and logic for the search bar, movie list, and watched movies summary.

The state of the `App.js` component consists of the following:

- `query`: The current search query.
- `movies`: The list of movies that match the search query.
- `watched`: The list of movies that the user has watched.
- `isOpen1`: A boolean that determines whether the movie list is open.
- `isOpen2`: A boolean that determines whether the watched movies summary is open.

The `App.js` component also contains the following logic:

- When the user types in the search bar, the `setQuery` function is called. This function updates the `query` state and fetches the list of movies that match the search query.
- When the user clicks on the "Watched" button, the `setIsOpen2` function is called. This function toggles the `isOpen2` state, which determines whether the watched movies summary is open.

## MovieList.js

The `MovieList.js` component displays a list of movies. It receives the list of movies as a prop and renders a list item for each movie.

Each movie list item contains the
