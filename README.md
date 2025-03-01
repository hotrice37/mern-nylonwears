# NylonWears

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Files and Folders Description](#files-and-folders-description)
- [License](#license)

## Introduction
This is a full-stack e-commerce web application.

This software was created as part of Semester Project in the third semester of undergraduate program in Computer Science.

The group members are:
1. Shashwat Khadka
2. Shubin Pokhrel
3. Siddhartha Lal Pradhan
4. Binaya Raj Thapa

The website has been created by using MERN Stack. The project includes a backend API using Express and Node.js, a frontend built with React, and a MongoDB database.

The report of the project is attached below:
[II.I Project Report.pdf](https://github.com/user-attachments/files/19037758/II.I.Project.Report.pdf)

## Features
- User authentication (JWT-based)
- CRUD operations (Create, Read, Update, Delete)
- Responsive UI
- RESTful API
- Protected routes

## Tech Stack
- **Frontend:** React, React Router, Bootstrap
- **Backend:** Node.js, Express.js, Nodemon
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt


## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Clone the Repository
```bash
git clone https://github.com/hotrice37/mern-nylonwears.git
cd mern-nylonwears
```

### Install Dependencies
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

## Usage
### Start Backend Server
```bash
cd backend
npm start
```

### Start Frontend
```bash
cd frontend
npm start
```

## Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```ini
MONGO_URI=mongodb://127.0.0.1/nylonwears
JWT_SECRET=somethingsecret
```

## Folder Structure

```
├── backend/
│   ├── data.js
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── seedRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── utils.js

└── frontend
    ├── public/
    └── src/
        ├── components/
        │   ├── card.js
        │   ├── checkoutSteps.js
        │   ├── css/
        │   ├── footer.js
        │   ├── index.js
        │   ├── layout.js
        │   ├── loadingbox.js
        │   ├── messagebox.js
        │   ├── navbar.js
        │   ├── rating.js
        │   ├── rendercard.js
        │   └── searchbox.js
        ├── index.js
        ├── pages/
        │   ├── 404.js
        │   ├── cart.js
        │   ├── contactus.js
        │   ├── Home.js
        │   ├── login.js
        │   ├── orderhistory.js
        │   ├── order.js
        │   ├── paymentmethod.js
        │   ├── placeorder.js
        │   ├── productdetails.js
        │   ├── profile.js
        │   ├── search.js
        │   ├── shippingaddress.js
        │   └── signup.js
        ├── store.js
        └── utils.js
```

## Files and Folders Description

### Backend Folder

- **Models Folder:**

  This folder contains the different schema with which the data is saved in MongoDB.

- **Routes Folder:**

  This folder uses express.js to handle different routes of order, product and user. It also uses bcrypt to hash passwords.

- **data.js:**

  Contains the placeholder data for when the project was not connected to MongoDB.

- **utils.js:**

  Contains the implementation of JSON Web Token for generating tokens for id, name and email in order to achieve secure authorization.

- **server.js:**

  Contains the setup for starting the express server and connecting to MongoDB.

### Frontend Folder

- **Components folder:**

  Contains the various reusable React components for website construction.

- **Pages folder:**

  Contains pages constructed from the combination of components.

- **store.js:**

  Contains states created in localStorage with the help of createContext and related to respective actions with the help of useReducer.

- **index.js:**

  Contains various routes created by react-router-dom and the pages in pages folder linked in their respective routes. This is the main file where the react app is started.

## License
This project is licensed under the MIT License.


