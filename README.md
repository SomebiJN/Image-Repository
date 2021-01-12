## Introduction
This project is an image repository in which images can be uploaded, stored and viewed in the gallery.


## Technologies
Project is created with:
* Create React App(https://github.com/facebook/create-react-app)
* Cloudinary  - hosts the user's uploaded images and transforms them to fit the site
* Node.js

## Setup
To run this project, install it locally using npm:

```
$ cd ../my-app
$ npm install
$ npm start
```
The react app can then be viewed on http://localhost:3000

In order for upload to work, a server has to be running on port 3001 by running in a different terminal:

```
$ nodemon server.js
```
The app can now be viewed in the browser and once the selected file is submitted, it is displayed in the gallery.
