# Eat The Burger

Eat The Burger is an app that allows you to add different types of burgers and then "devour" them later.

## Live version
Go [here](https://lit-hamlet-29799.herokuapp.com/) to view the app.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

Node (LTS) - http://nodejs.org

MySQL Workbench - https://dev.mysql.com/downloads/workbench/


### Installing

Clone [this](https://github.com/crystalodi/burger.git) github repository to a folder on your computer using a command line program.

```
git clone https://github.com/crystalodi/burger.git
```

Navigate to the folder the repository was cloned into and run npm install to create the `node_modules` folder needed to run the application

```
cd burger
npm install
```

Open MySQL Workbench program installed in the Prerequisites section. Open schema.sql in `db` folder and execute the query. Do the same for `seeds.sql` located in the folder.


Start the server and application

```
npm start
```

Open a web browser and type http://localhost:3000. Your should see this:


## About the Application

### Folder Structure

The app utilizes the MVC (Model-View-Controller) design pattern to organize functionality. After following the steps in the Installation section, your folder should look like this:

```
burger/
  config/
    connection.js
    orm.js
  controllers/
    burgers_controller.js
  db/
    schema.sql
    seeds.sql
  models/
    burger.js
  node_modules/
  public/
      assets/
        css/
            burger_style.css
        img/
            burger.png
        js/
            burgers.js
  views/
      layouts/
        main.handlebars
      partials/
        burgers/
            burger-block.handlebars
    index.handlebars
  .gitignore
  package.json
  README.md
  server.js
```

```
description of files here
```


## How to Use

### Add a burger

### Eat a Burger


## Built With

* [NodeJS](https://nodejs.org/) - The web framework used
* [Express](https://expressjs.com/) - Used to create web server
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars/) - Used to generate layout
* [Materialize CSS](https://materializecss.com/) - CSS Framework used to add styling to layout.
* [Body Parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing body sent for POST requests.
* [MySQL](https://www.npmjs.com/package/mysql) - Node Package used to query MySQL database

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* MySQL Documentation

