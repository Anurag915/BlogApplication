# Blog Application

## Description
This is a simple blog application that allows users to create posts, comment on posts, and like/unlike posts. It is built using Node.js, Express, and MongoDB.

## Features
- Create blog posts
- Comment on posts
- Like and unlike posts
- Retrieve all posts

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Render (for deployment)

## API Endpoints

### Posts
- **Create Post**  
  `POST /api/v1/posts/create`  
  Creates a new blog post.
  
- **Get All Posts**  
  `GET /api/v1/posts`  
  Retrieves all blog posts.

### Comments
- **Create Comment**  
  `POST /api/v1/comments/create`  
  Adds a comment to a post.

### Likes
- **Like a Post**  
  `POST /api/v1/likes/like`  
  Likes a post.
  
- **Unlike a Post**  
  `POST /api/v1/likes/unlike`  
  Removes a like from a post.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/blog-application.git
   cd blog-application
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=your_preferred_port
     ```
4. Start the server:
   ```sh
   npm start
   ```

## Deployment
This application is deployed on **Render**. You can access it at:
[http://blogapplication-x8ba.onrender.com](http://blogapplication-x8ba.onrender.com)

## License
This project is open-source and available under the MIT License.

## Contact
For any queries or support, please contact: 
- **Email:** your-email@example.com
- **GitHub:** [your-github-profile](https://github.com/your-github-profile)