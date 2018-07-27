# New York Times Search

New York Times Search that allows you to use the New York Times article search API to retrieve articles, view articles, and save them for viewing later.

## Live version
Go [here](https://crystal-nyt-search.herokuapp.com/) to view the app.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

Node (LTS) - http://nodejs.org

Yarn Package Manager - https://yarnpkg.com/en/docs/install#windows-stable

GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing

Clone [this](https://github.com/crystalodi/burger.git) github repository to a folder on your computer using a command line program.

```
git clone https://github.com/crystalodi/burger.git
```

Navigate to the folder the repository was cloned into and run yarn install to create the `node_modules` folder needed to run the application

```
cd nytreact
yarn install
```

Start the server and application

```
yarn start
```

Your default web browser should open to this url http://localhost:3000.


## About the Application

### Folder Structure

The app utilizes the MVC (Model-View-Controller) design pattern to organize functionality. After following the steps in the Installation section, your folder should look like this:

```
├── client
├── controllers
├── images
├── models
├── nodemon.json
├── node_modules
├── package.json
├── Procfile
├── README.md
├── routes
├── server.js
└── yarn.lock
```

* `/controllers` contains the routes used to save articles and remove articles. (Controller)
* `/client` contains UI that displays articles and the logic to send Ajax requests when a button is clicked. (View)
* `/models` contains the mongoose model used to create Articles collection in database, which will be used to save articles and retrieve saved articles. (Model)
* `/routes` contains the api end points used to call routes in the `/controllers` folder. (Controller)
* `server.js` Connects to the mongo database and imports routes file from `/routes` folder.


## How to Use

### Search For Articles
<img src="https://raw.githubusercontent.com/crystalodi/nytreact/master/images/home.png">

Using the nav bar navigate to the home page. Enter a search term and press search.

<img src="https://raw.githubusercontent.com/crystalodi/nytreact/master/images/article_search_results.png">


### Save an Article
While still on the home page, press the save button found under article search results.



### Remove Article from Saved Articles
Using the navbar navigate to the Saved Articles by pressing Saved.
Click the red "Remove" button.

<img src="https://raw.githubusercontent.com/crystalodi/nytreact/master/images/remove_from_saved.png">


## Built With

* [NodeJS](https://nodejs.org/) - The web framework used
* [Express](https://expressjs.com/) - Used to create web server
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Bootstrap](https://materializecss.com/) - CSS Framework used to add styling to layout.
* [Body Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing body sent for POST requests.
* [Mongoose](http://mongoosejs.com/) - used to create models that represent collections in a mongo database.

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* Mongoose Documentation
* React Documentation

