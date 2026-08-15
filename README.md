# 🔖 Bookmarks REST API

A RESTful backend API for creating, managing, filtering, and deleting bookmarks using **Node.js, Express.js, MongoDB, and Mongoose**.

## 🚀 Features

* Create bookmarks
* Get all bookmarks
* Get a single bookmark by ID
* Update bookmarks
* Delete bookmarks
* Filter bookmarks by category
* MongoDB Atlas integration
* Mongoose schema validation
* Environment variable configuration
* Proper HTTP status codes
* Error handling for validation errors and invalid MongoDB IDs
* API testing with Postman

## 🛠️ Tech Stack

* **Node.js** — JavaScript runtime
* **Express.js** — REST API framework
* **MongoDB Atlas** — Cloud database
* **Mongoose** — MongoDB ODM
* **dotenv** — Environment variable management
* **Nodemon** — Development server
* **Postman** — API testing

## 📁 Project Structure

```text
bookmarks-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── bookmarkController.js
│
├── models/
│   └── Bookmark.js
│
├── routes/
│   └── bookmarkRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Folder Responsibilities

**`config/`**

Contains the MongoDB database connection logic.

**`models/`**

Contains the Mongoose schema and model for bookmarks.

**`controllers/`**

Contains the business logic for creating, reading, updating, and deleting bookmarks.

**`routes/`**

Defines API endpoints and connects them to controller functions.

**`server.js`**

The main entry point of the application. It:

* Loads environment variables
* Initializes Express
* Connects to MongoDB
* Enables JSON request parsing
* Registers API routes
* Starts the server

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/mohammadshaikh77/bookmarks-api.git
```

### 2. Navigate into the project

```bash
cd bookmarks-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

> Never commit your `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The API will run at:

```text
http://localhost:3000
```

## 📡 API Endpoints

Base URL:

```text
http://localhost:3000/api/bookmarks
```

| Method | Endpoint                           | Description                  |
| ------ | ---------------------------------- | ---------------------------- |
| POST   | `/api/bookmarks`                   | Create a bookmark            |
| GET    | `/api/bookmarks`                   | Get all bookmarks            |
| GET    | `/api/bookmarks/:id`               | Get a bookmark by ID         |
| GET    | `/api/bookmarks?category=learning` | Filter bookmarks by category |
| PUT    | `/api/bookmarks/:id`               | Update a bookmark            |
| DELETE | `/api/bookmarks/:id`               | Delete a bookmark            |

## 📝 API Usage

### Create a Bookmark

**POST**

```text
/api/bookmarks
```

Request body:

```json
{
  "title": "LeetCode",
  "url": "https://leetcode.com",
  "category": "learning",
  "isFavorite": true
}
```

Response:

```json
{
  "_id": "64abc123...",
  "title": "LeetCode",
  "url": "https://leetcode.com",
  "category": "learning",
  "isFavorite": true,
  "createdAt": "2026-08-15T08:36:14.291Z"
}
```

Returns:

```text
201 Created
```

---

### Get All Bookmarks

**GET**

```text
/api/bookmarks
```

Returns all bookmarks stored in MongoDB.

Returns:

```text
200 OK
```

---

### Filter Bookmarks by Category

**GET**

```text
/api/bookmarks?category=learning
```

The API reads the category using:

```js
req.query.category
```

and returns only bookmarks matching that category.

Example:

```text
GET /api/bookmarks?category=learning
```

---

### Get a Bookmark by ID

**GET**

```text
/api/bookmarks/:id
```

Example:

```text
/api/bookmarks/64abc123...
```

Returns the requested bookmark if it exists.

If the bookmark doesn't exist:

```text
404 Not Found
```

---

### Update a Bookmark

**PUT**

```text
/api/bookmarks/:id
```

Example request:

```json
{
  "title": "LeetCode DSA",
  "category": "DSA",
  "isFavorite": false
}
```

The API uses Mongoose validation during updates.

Returns:

```text
200 OK
```

---

### Delete a Bookmark

**DELETE**

```text
/api/bookmarks/:id
```

Example:

```text
/api/bookmarks/64abc123...
```

Response:

```json
{
  "message": "Bookmark deleted successfully"
}
```

Returns:

```text
200 OK
```

## 🗃️ Bookmark Schema

| Field        | Type    | Required | Default      |
| ------------ | ------- | -------- | ------------ |
| `title`      | String  | Yes      | —            |
| `url`        | String  | Yes      | —            |
| `category`   | String  | Yes      | —            |
| `isFavorite` | Boolean | No       | `false`      |
| `createdAt`  | Date    | No       | Current date |

## ❌ Error Handling

The API handles common errors using appropriate HTTP status codes.

### Validation Error

If required fields are missing:

```text
400 Bad Request
```

Example:

```json
{
  "message": "Validation error",
  "error": "Bookmark validation failed..."
}
```

### Invalid MongoDB ID

If an invalid ID is provided:

```text
400 Bad Request
```

Example:

```json
{
  "message": "Invalid bookmark ID"
}
```

### Bookmark Not Found

If a valid MongoDB ID does not correspond to an existing bookmark:

```text
404 Not Found
```

Example:

```json
{
  "message": "Bookmark not found"
}
```

### Server/Database Error

Unexpected server or database errors return:

```text
500 Internal Server Error
```

## 🧪 Testing

The API was tested using **Postman**.

Tested operations:

* ✅ Create bookmark
* ✅ Get all bookmarks
* ✅ Get bookmark by ID
* ✅ Filter bookmarks by category
* ✅ Update bookmark
* ✅ Delete bookmark
* ✅ Validation error handling
* ✅ Invalid MongoDB ID handling
* ✅ 404 resource-not-found handling

## 🔐 Environment Variables

The application uses environment variables for configuration and sensitive credentials.

Example:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

The `.env` file is excluded from Git using `.gitignore`.

**Never commit database credentials or other secrets to GitHub.**

## 🔄 Request Flow

A typical request follows this architecture:

```text
Client / Postman
       ↓
Express Server
       ↓
Route
       ↓
Controller
       ↓
Mongoose Model
       ↓
MongoDB Atlas
       ↓
Controller
       ↓
JSON Response
```

The project follows a simple separation of responsibilities:

```text
Routes       → Which endpoint was requested?
Controllers  → What should happen?
Models       → How is the data structured/stored?
Config       → How do we connect to the database?
```

## 📌 Future Improvements

Possible future improvements include:

* JWT authentication
* User-specific bookmarks
* Search bookmarks by title
* Pagination
* Sorting
* URL validation
* Duplicate bookmark prevention
* Swagger/OpenAPI documentation
* Automated API testing
* API deployment
* Rate limiting

## 👨‍💻 Author

**Mohammad Shaikh**

GitHub: [@mohammadshaikh77](https://github.com/mohammadshaikh77)

## 📄 License

This project is created for learning and portfolio purposes.
