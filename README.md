# Twitter Clone

## Project Overview

This project is a full-stack clone of Twitter, designed to provide a comprehensive understanding of building a social media platform.  The application encompasses both frontend and backend components, allowing users to create accounts, post tweets, follow other users, and interact with tweets through likes, replies, and retweets.

## Features

**Frontend (React.js & Tailwind CSS)**

* **Authentication:** Secure user registration, sign-in, and password management.
* **Home Timeline:** Display tweets from followed users in chronological order.
* **Tweet Composition:** Create new tweets with text, images, and video content.
* **Tweet Interactions:** Like, reply to, and retweet existing tweets.
* **User Profiles:** View and manage user profiles, including follower/following lists.
* **Search Functionality:** Search for tweets and users.
* **Responsive Design:** Optimized for various screen sizes and devices.

## Installation

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your system.
2. **Navigate to the project directory**: Open your terminal and navigate to the project directory.
3. **Install dependencies**: Use the following command to install the necessary project dependencies:

```bash
npm install
```

## Usage

1. **Start the development server**: Run the following command to start the development server:

```bash
npm start
```

This will launch the application in your browser, usually at `http://localhost:3000`.

## Backend (Spring Boot & Java)

* **RESTful API:** Exposes endpoints for user management, tweet posting, interactions, and other functionalities.
* **Database Integration:** Stores user data, tweets, and interactions in a persistent database.
* **JWT Authentication:** Securely authenticates users and manages session tokens.
* **Cloudinary Integration:**  Manages image and video storage and delivery using Cloudinary. 
* **Error Handling:** Handles and responds to potential errors in a user-friendly manner.

## Features

* **User Authentication:** Secure user registration and login with JWT (JSON Web Token) authentication.
* **Tweet Management:** Create, retrieve, update, and delete tweets.
* **Liking System:** Users can like tweets.
* **User Management:** View user profiles, manage their tweets.

## Installation

1. **Prerequisites:**
   - Java Development Kit (JDK) 11+
   - Maven
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/RonakKhuntia/TwitterClone.git
   ```
3. **Navigate to the Project Directory:**
   ```bash
   cd twitter-clone-backend
   ```
4. **Build the Project:**
   ```bash
   mvn clean install
   ```

## Usage

1. **Start the Application:**
   ```bash
   mvn spring-boot:run
   ```
2. **Access the API Endpoints:**
   The API endpoints are accessible via the following base URL: `http://localhost:8080`.
   - **Authentication:**
     - `/auth/register` (POST) - Register a new user
     - `/auth/login` (POST) - Login an existing user
   - **Tweets:**
     - `/tweets` (GET) - Get all tweets
     - `/tweets/{tweetId}` (GET) - Get a specific tweet
     - `/tweets` (POST) - Create a new tweet
     - `/tweets/{tweetId}` (PUT) - Update a tweet
     - `/tweets/{tweetId}` (DELETE) - Delete a tweet
   - **Likes:**
     - `/likes/{tweetId}` (POST) - Like a tweet
     - `/likes/{tweetId}` (DELETE) - Unlike a tweet
   - **Users:**
     - `/users/{userId}` (GET) - Get a user's profile
     - `/users/{userId}/tweets` (GET) - Get a user's tweets

## Example

**Create a New Tweet (POST):**

```json
{
  "content": "This is my first tweet!"
}
```

**Send a POST request to the `/tweets` endpoint:**

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"content": "This is my first tweet!"}' \
  http://localhost:8080/tweets
```

**Response (201 Created):**

```json
{
  "id": 1,
  "content": "This is my first tweet!",
  "userId": 1,
  "createdAt": "2023-12-20T10:00:00Z"
}
```

**Note:** The frontend and backend applications need to be running concurrently for the application to function properly. 

This README provides a basic overview of the Twitter Clone project. For more detailed information, please refer to the code comments and documentation within the project files. 
