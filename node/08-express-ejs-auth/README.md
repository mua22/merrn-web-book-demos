# Express EJS Auth Demonstration

This project is a classroom demonstration of two different authentication strategies within a single Express application:
1. **Web Authentication (Session-based):** Uses `express-session` and cookies to authenticate users logging in through web forms (EJS templates).
2. **API Authentication (JWT-based):** Uses JSON Web Tokens (`jsonwebtoken`) passed via HTTP headers (`Authorization: Bearer <token>`) to authenticate clients interacting with a RESTful API.

## Project Structure

This application follows an MVC-like structure for organization:

- **`models/`**: Mongoose schemas defining the structure of the MongoDB database documents (`User` and `Product`).
- **`views/`**: EJS templates representing the frontend UI (`login`, `register`, and a protected `dashboard`).
- **`routes/`**: Handles the routing logic.
  - `web.js`: Contains the routes that render EJS views and handle session-based login/register.
  - `api.js`: Contains the RESTful API endpoints that accept and return JSON and expect JWT for protected access.
- **`middlewares/`**: Custom Express middleware functions to protect routes.
  - `sessionAuth.js`: Checks for an active session before allowing access to web routes.
  - `jwtAuth.js`: Validates the JWT in the request header before allowing access to API routes.
- **`config/`**: Configuration files using the `config` package.
  - `default.json`: Contains default fallback values (e.g., local DB URI, default secrets).
  - `custom-environment-variables.json`: Maps environment variables to configuration keys (e.g., maps `MONGODB_URI` environment variable to `dbURI`).

## Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally, or a MongoDB Atlas connection string.

## Setup Instructions

1. **Install Dependencies:**
   Open your terminal in the project directory and run:
   ```bash
   npm install
   ```

2. **Environment Variables (Optional):**
   By default, the app will use the hardcoded secrets in `config/default.json`. For security in production, you can set the following environment variables to override the defaults:
   - `MONGODB_URI` (e.g., `mongodb+srv://...`)
   - `JWT_SECRET`
   - `SESSION_SECRET`

3. **Start the Application:**
   ```bash
   node app.js
   ```
   The server will start running at `http://localhost:3000` and will attempt to connect to MongoDB.

## How to Test

### 1. Web Authentication (Session)
- Open your browser and navigate to `http://localhost:3000`.
- You will be redirected to the login page.
- Click "Register here" to create a new user account.
- Once registered, log in with your new credentials.
- You should be successfully redirected to your protected Dashboard.

### 2. API Authentication (JWT)
To test the API, you can use a tool like Postman, Thunder Client, or cURL.

**Step A: Get a JWT Token**
- Make a `POST` request to `http://localhost:3000/api/login`
- Include a JSON body with the credentials you registered:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- The response will contain your token:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "message": "Logged in successfully"
  }
  ```

**Step B: Access Protected Product Routes**
- Make a `GET` request to `http://localhost:3000/api/products` to fetch all products.
- Make a `POST` request to `http://localhost:3000/api/products` with a JSON body (`name`, `price`, `description`) to create a product.
- **IMPORTANT:** For both requests, you must include the token in the headers:
  - **Key:** `Authorization`
  - **Value:** `Bearer <your_token>`

If you omit the header or provide an invalid token, the server will respond with an `Access Denied` error.
