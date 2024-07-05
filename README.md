# Job Parser Project

This project is a web application that parses job listings from a website (hh.ru), stores the data in a database, and provides a frontend for users to interact with the data. The application is built using React (Vite) for the frontend and FastAPI with SQLAlchemy and Alembic for the backend.


## How to Use


- [Backend](#backend)
  - [Setup](#setup-backend)
  - [Run](#run-backend)
- [Frontend](#frontend)
  - [Setup](#setup-frontend)
  - [Run](#run-frontend)
- [Docker Compose](#docker-compose)
  - [Environment Setup](#environment-setup)
  - [Build and Run Docker Compose](#build-and-run-docker-compose)


## Backend


### Setup
```bash
cd backend
poetry shell
poetry install
```
### RUN
```
poetry run python src/main.py
```

## Front


### Setup
```bash
#install npm, node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash 
cd ~/.nvm/
nvm install 20
cd path_to_front/
npm install
```
### RUN
```
npm run dev
```


# Docker Compose

## Environment Setup

1. Create a file named .env.

2. Define environment variables:
 ```env
POSTGRES_USER=
POSTGRES_PASSWORD=  
POSTGRES_DB=
DB_HOST=db 
DB_PORT= 
DB_NAME= 
```
- Example:
```env
POSTGRES_USER=postgres 
POSTGRES_PASSWORD=postgres  
POSTGRES_DB=test1 
DB_HOST=db 
DB_PORT=5432 
DB_NAME=test1 
```

## Build and Run Docker Compose
```bash 
docker compose up --build
```