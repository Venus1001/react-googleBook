## Google Book Search - React

# Project Name:
Google Book Search - React

Table of Contents:

1. Quick start
2. User Story
3. Acceptance Criteria
4. Project description
5. Installation
6. Usage
7. Creators

## User Story
                    
```
This application requires at minimum 2 pages, check out the following mockup images for each page:

Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

```
## Project description
In this activity, create a new React-based Google Books Search app. This assignment requires to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also, use Node, Express and MongoDB so that users can save books to review or purchase later.

## Project Details:

Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.

Using mongoose, then create a Book schema.

At a minimum, books should have each of the following fields:

title - Title of the book from the Google Books API
authors - The books's author(s) as returned from the Google Books API
description - The book's description as returned from the Google Books API
image - The Book's thumbnail image as returned from the Google Books API
link - The Book's information link as returned from the Google Books API

Creating documents in your books collection similar to the following:
```
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}
```
Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.

The layout should include at least two React Components for each page Search and Saved.

Feel free to try out alternative CSS framework to Bootstrap.

Add the following Express routes for your app:

/api/books (get) - Should return all saved books as JSON.

/api/books (post) - Will be used to save a new book to the database.

/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.

* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

Deploy your application to Heroku once complete. You must use Create React App and current versions of React and React-Router-Dom for this assignment.

## Application usage guidance

![google-serach-books](utils/images/googlebooks.jpeg)


## Creators
Project created by: Venus Hu 

Github: 
https://github.com/Venus1001/react-googleBook.git