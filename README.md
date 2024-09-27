
 Overview
This is allows users to check train availability, book seats, and manage user accounts. Admins can manage train data.

 Technologies Used
- Node.js
- Express.js
- PostgreSQL
- JWT for authentication
- dotenv for environment variables

Procesdure:-
Extract files

Install the modules using npm i

To run the project - npm start

If PostgreSQL is installed then do change the password accordingly at /middleware/connection file

Create an endpoint for registering a user.

Provide the ability to the user to log into his account.

An endpoint for the admin to create a new train with a source and destination

Create an endpoint for the users where they can enter the source and destination and fetch all the trains between that route with their availabilities.

Create an endpoint for the users to book a seat on a particular train.

Get Specific Booking Details make readme like this


Usage:-

Register a User
Use the /api/auth/register endpoint to create a user account.

Login and Get JWT Token
After registration, log in using the /api/auth/login endpoint to receive a JWT token, which will be used for authorized actions.

Admin Actions (Adding a Train)
Admins can add a new train using the /api/trains endpoint. Include the x-api-key header with the value from the .env file to authenticate as an admin.

Booking a Seat
Logged-in users can book a seat by making a POST request to /api/bookings with the Authorization header containing the JWT token.


Database table:-
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  seats INT NOT NULL
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  train_id INT REFERENCES trains(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


