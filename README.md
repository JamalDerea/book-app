# Book App

A full-stack web application built as part of a technical assessment for a LIA internship. The goal was to build a responsive CRUD application with authentication from scratch using Angular 20 and .NET 9.

## Live Demo
https://book-app-jamal.netlify.app

## Backend Repo
https://github.com/JamalDerea/BookApp

## What I Built

A working book and quote manager where users can register, log in and manage their own data. Everything is connected – the Angular frontend talks to a .NET API which reads and writes to a SQL Server database hosted on Azure.

## Tech Stack

**Frontend**
- Angular 20
- TypeScript
- Bootstrap 5
- Font Awesome

**Backend**
- .NET 9 / C# Web API
- Entity Framework Core (Code First)
- SQL Server
- JWT Authentication
- BCrypt password hashing

**Deployment**
- Frontend: Netlify
- Backend: Azure App Service
- Database: Azure SQL Database

## Features
- User registration and login
- JWT token stored in localStorage and sent with every request
- HTTP interceptor that automatically attaches the token to API calls
- Route guards – unauthenticated users are redirected to login
- Full CRUD for books (title, author, genre, release date)
- Full CRUD for quotes (linked to the logged in user)
- Responsive design – works on mobile, tablet and desktop
- Navbar that updates based on login state

## What I Learned

I had no prior experience with Angular before this project. I learned how Angular's component structure works, how to set up routing and route guards, how services and dependency injection work, and how to handle JWT authentication on the frontend with an HTTP interceptor. It was a steep learning curve but I got it working end to end. From a blank project to a deployed fullstack application.
