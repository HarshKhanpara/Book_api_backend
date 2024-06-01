# Book API

This project is a simple REST API server built with Node.js, Express, and MongoDB. It allows users to Create, Read, Update, and Delete (CRUD) book data in a MongoDB database.

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running, or a MongoDB Atlas account with a connection string

## Setup

1. Clone the repository and navigate to the project directory:

    ```bash
    git clone https://github.com/yourusername/book-api.git
    cd book-api
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add  MongoDB connection string:

    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the server:

    ```bash
    node server.js
    ```

   You should see `Server running on port 5000` and `MongoDB connected...` in your terminal.

## Testing the API

You can test the API using tools like Postman or curl. Below are examples of how to test each endpoint using curl.

### 1. Add a Book

   bash
   curl -X POST http://localhost:5000/api/books \
   -H "Content-Type: application/json" \
   -d '{
     "name": "The Hobbit",
     "img": "https://bit.ly/3qA5XZl",
     "summary": "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon."
   }

### 2. Get All Books

   bash
   curl http://localhost:5000/api/books


### 3. Get a Book by ID

   bash
    curl http://localhost:5000/api/books/60b9b3b3b3b3b3b3b3b3b3b3


### 4. Update a Book

   bash
   curl -X PUT http://localhost:5000/api/books/60b9b3b3b3b3b3b3b3b3b3 \
   -H "Content-Type: application/json" \
   -d '{
     "name": "The Hobbit",
     "img": "https://bit.ly/3qA5XZl",
     "summary": "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon."
   }

### 5. Delete a Book

bash
    curl -X DELETE http://localhost:5000/api/books/60b9b3b3b3b3b3b3b3b3b3

