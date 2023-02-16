## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Tested with](#tested-with)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo Video](#demo-video)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
​

## Overview
### E-Commerce Back End
​
    App that manages that backend data of E-Commerce website (Front End Not included). Allows user to Create, Update, and delete products, as well as the products categories and tags. Also allows you to look at all the products that fit within the categories or tags by either seeing all categories or tags, or searching by one category or tag type.

### Links
- [GitHub Repository](https://github.com/anomic84/E-commerce-Back-End)
​
## Docs, Installation, and Usage
​
### Built with
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [MySQL](https://www.npmjs.com/package/mysql2)
- [Sequalize](https://sequelize.org/)
​
### Tested with
-[Insomnia](https://insomnia.rest/)

### Installation

    First, clone this repo into your local machine.

    You will need to make sure you have Node.js downloaded via the link above. 
    After you have Node.js on your local machine, in your command line, run: 

        ```npm install```

    Which will automatically install Express, Inquirer, MySQL, and Sequalize.

### Usage

    To use you must source the schema.sql, as well as seeds.sql. Enter MySQL by typing in the command line:

    ```mysql -u root -p```

    Enter your password, then enter:

    ```source db/schema.sql```

    Then, type `quit` to exit MySQL

    After you quit MySQL, in your command line:

    ```npm run seeds```

    Finally, start your server by entering:

    ```npm start```

    And the application will start!

    The Demo Video will show you how to use Insomnia to test your back end!

### Demo Video
​[Demo Video](https://watch.screencastify.com/v/NYKmh5gXa7kB7gkFU76b)

## Author
    Spencer Carlson
- Website - [Spencer Carlson](https://spencerccarlson.com)
- GitHub - [anomic84](https://github.com/anomic84)
​

​
## Acknowledgments
    I'd like to thank Jacob Nordan and Casey Miller for helping me along with this project.
​
