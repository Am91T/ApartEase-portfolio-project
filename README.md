# ApartEase

ApartEase is a web application designed to help users find and manage their ideal apartments and houses. Users can register, login, view property listings, and save their favorite properties.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Property listing and detailed view
- Save favorite properties

## Technologies Used

### Backend

- Python
- Flask
- Flask SQLAlchemy
- Flask Migrate
- Flask Bcrypt
- Flask JWT Extended

### Frontend

- React
- Axios
- React Router DOM

## Installation

### Prerequisites

- Python 3.8+
- Node.js
- MySQL

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Am91T/ApartEase-portfolio-project.git
   cd ApartEase-portfolio-project/backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables in a `.env` file:

   ```plaintext
   DATABASE_URL=mysql://username:password@localhost/apartease_db
   SECRET_KEY=your_secret_key
   JWT_SECRET_KEY=your_jwt_secret_key
   ```

5. Initialize the database:

   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

6. Run the backend server:
   ```bash
   export FLASK_APP=app.py
   flask run
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Register a new user account.
3. Log in with your credentials.
4. Browse the list of properties.
5. View detailed information about a property.
6. Save properties to your favorites list.

## API Endpoints

### User Routes

- `POST /users` - Create a new user
- `POST /login` - Login and get a JWT token

### Property Routes

- `GET /properties` - Get a list of all properties
- `GET /properties/:id` - Get details of a specific property

### Favorite Routes

- `POST /favorites` - Add a property to favorites (requires JWT)
- `DELETE /favorites/:id` - Remove a property from favorites (requires JWT)

## Testing

### Backend

1. Install pytest:

   ```bash
   pip install pytest
   ```

2. Run the tests:
   ```bash
   pytest
   ```

### Frontend

1. Run the tests:
   ```bash
   npm test
   ```

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
