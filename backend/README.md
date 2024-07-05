<!-- curl -sSL https://install.python-poetry.org | python3 -
echo "PATH="$HOME/.local/bin:$PATH" -->
# Backend for Job Parser Project

This is the backend of the Job Parser Project, built with FastAPI, SQLAlchemy, and Alembic. It handles requests from the frontend, performs web scraping, interacts with the database, and serves the scraped data.

## Table of Contents

- [Installation](#installation)
- [Running the Backend](#running-the-backend)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Database Migrations](#database-migrations)
- [Testing](#testing)

## Installation

To get started with the backend, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/job-parser.git
    cd job-parser/backend
    ```

2. Install Poetry, a dependency manager:
    ```bash
    curl -sSL https://install.python-poetry.org | python3 -
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    ```

3. Install the project dependencies:
    ```bash
    poetry install
    ```
4. Create a db.env file with the following content:

    ```env
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_NAME=test1
    DB_HOST=localhost
    DB_PORT=5432
    ```

5. Set up the database:

    ```bash
    export PYTHONPATH=$PWD:$PWD/src:$PYTHONPATH
    poetry run alembic upgrade head
    ```
## Running the Backend

1. Start the FastAPI server:

    ```bash
    export PYTHONPATH=$PWD:$PWD/src:$PYTHONPATH
    poetry run uvicorn src.main:app --reload
    ```

The backend server should now be running at http://localhost:8000.


## Database Migrations

To create and apply database migrations, use Alembic. Here are the common commands:

- Create a new migration:

    ```bash
    poetry run alembic revision --autogenerate -m "Migration message"
    ```
-   Apply migrations:

    ```bash
    poetry run alembic upgrade head
    ```


## Running Tests

To run the tests, use the following command:

    poetry run pytest

## Docker

To run the backend in a Docker container, follow these steps:

1. Build the Docker image:

    ```bash
    docker build -t job-parser-backend .
    ```

2. Run the Docker container:

    ```bash
    docker run --env-file db.env -p 8000:8000 job-parser-backend
    ```

## Environment Variables

Make sure to set the following environment variables in your `db.env` file:

    
    DB_USER: Database username.
    DB_PASSWORD: Database password.
    DB_NAME: Database name.
    DB_HOST: Database host.
    DB_PORT: Database port.
    
For more detailed instructions and troubleshooting, refer to the main README.md file.