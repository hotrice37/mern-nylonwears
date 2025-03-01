# NylonWears

## A full-stack e-commerce website

This software was created as part of Semester Project in the third semester of undergraduate program in Computer Science.

The group members are:
1. Shashwat Khadka
2. Shubin Pokhrel
3. Siddhartha Lal Pradhan
4. Binaya Raj Thapa

The website has been created by using MERN Stack.

## The report of the project is attached below:
[II.I Project Report.pdf](https://github.com/user-attachments/files/19037758/II.I.Project.Report.pdf)

# Backend Folder

## Model Folder

This folder contains the different schema with which the data is saved in MongoDB.

## Routes Folder

This folder uses express.js to handle different routes of order, product and user. It also uses bcrypt to hash passwords.

## data.js

Contains the placeholder data for when the project was not connected to MongoDB.

## utils.js

Contains the implementation of JSON Web Token for generating tokens for id, name and email in order to achieve secure authorization.

## server.js

Contains the setup for starting the express server and connecting to MongoDB.

# Frontend Folder

## Components folder

Contains the various reusable React components for website construction.

## Pages folder

Contains pages constructed from the combination of components.

## store.js

Contains states created in localStorage with the help of createContext and related to respective actions with the help of useReducer.

## index.js

Contains various routes created by react-router-dom and the pages in pages folder linked in their respective routes. This is the main file where the react app is started.
