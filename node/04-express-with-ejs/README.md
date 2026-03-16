# 04-express-with-ejs

This project is a basic demonstration of using Express.js with the EJS (Embedded JavaScript) templating engine.

## Features Covered

- Initializing an Express application.
- Setting up EJS as the view engine for rendering HTML pages dynamically.
- Serving static files (like CSS, images, and client-side JavaScript) from a `public` directory.
- Setting up basic routing for different endpoints (`/` and `/contact-us`).

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone or download this project.
2. Navigate into the project directory:
   ```bash
   cd 04-express-with-ejs
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the server, run the following command in the project directory:

```bash
node server.js
```

### Local Testing with Nodemon
If you are testing the application locally and want the server to automatically restart when you make changes, you can use `nodemon`.

First, install `nodemon` globally (if you haven't already):
```bash
npm install -g nodemon
```
*Alternatively, you can install it as a development dependency:*
```bash
npm install --save-dev nodemon
```

Once installed, you can start the server with:

```bash
nodemon server.js
```
*(If you didn't install it globally, you can use `npx nodemon server.js`)*

The server will start on port 3000. You can visit the following URLs in your browser:
- Homepage: [http://localhost:3000/](http://localhost:3000/)
- Contact Us page: [http://localhost:3000/contact-us](http://localhost:3000/contact-us)
