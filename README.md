# Hackathon-starter (Seva Platform)

Hackathon Starter Repo

Sode Matha App is a modern, scalable, full-stack application designed to serve devotees, temple admins and volunteers through a secure and modular architecture.

This repository is the starter blueprint for the Sode Matha platform.
It defines:
What the project is
How the repository is organized
What technologies should be used
The standard directory structure each module must follow

Platform consists of
?? Mobile Application (React Native / Expo) for devotees
?? Web Admin Panel (React) for temple management
?? Backend Platform (Spring Boot) for APIs & database

All components communicate through secure REST APIs.


## High-Level Architecture

> Both Mobile and Web clients communicate only with the backend APIs (clients do not talk to the database directly).

Mobile App (Expo React Native)
            ?
            ?
Backend APIs (Node.js + Express)
            ?
            ?
MongoDB Atlas(Cloud Database)


# Application project structre to be followed

webapp/
?
??? my-expo-app/        # ?? Mobile application (Frontend)
??? backend/            # ?? API Server
??? README.md


##My-expo-app(Mobile App)

my-expo-app/
?
??? app/                      # All app screens (Expo Router)
?   ?
?   ??? login.tsx             # Login screen
?   ??? otp.tsx               # OTP verification
?   ??? register.tsx          # Devotee registration
?   ??? profile.tsx           # User profile
?   ?
?   ??? history.tsx           # Matha history
?   ??? gallery.tsx           # Temple gallery
?   ??? artefacts.tsx         # Publications & media
?   ??? branches.tsx          # Branch directory
?   ?
?   ??? booking.tsx           # Room booking
?   ??? sevaform.tsx          # Seva booking form
?   ??? sevalist.tsx          # Seva list
?   ??? sevadetail.tsx        # Seva details
?   ?
?   ??? events.tsx            # Event calendar
?   ??? panchanga.tsx         # Panchanga integration
?   ?
?   ??? leaderboard/          # Quiz leaderboard
?   ?   ??? index.tsx
?   ?   ??? [id].tsx
?   ?
?   ??? quiz.tsx              # Youth quiz
?   ??? cancel.tsx            # Cancellation/refund
?   ??? refund.tsx            # Refund policy
?
??? assets/images/            # App images & icons
??? components/               # Reusable UI
??? constants/                # Theme & colors
??? hooks/                    # Custom hooks
??? package.json


##Backend(Node+Express+MongoDB)

backend/
?
??? middleware/
?   ??? authMiddleware.js
?
??? models/                # MongoDB Schemas (Mongoose)
?   ??? User.js
?   ??? Seva.js
?   ??? Booking.js
?   ??? Event.js
?   ??? QuizScore.js
?   ??? Donation.js
?
??? routes/
?   ??? authRoutes.js
?   ??? sevaRoutes.js
?   ??? bookingRoutes.js
?   ??? eventRoutes.js
?   ??? quizRoutes.js
?   ??? userRoutes.js
?
??? config/
?   ??? db.js              # MongoDB connection
?
??? server.js
??? .env
??? package.json



## Please ensure the following content is attached as well:

Wireframes of the UI pages

Design & Architecture document

Overview

The Sode Matha Mobile App is a digital platform designed to help devotees access temple services, book sevas, reserve rooms, view events, and receive updates.

The app replaces manual processes with a secure, scalable, cloud-ready digital system.

Goals of Architecture

Main objectives:
* Provide simple experience for devotees
* Support real-time updates by admin
* Handle payments & bookings securely
* Be scalable for Parayaya events
* Work on Android + iOS

Architecture Style
We are using 3-Tier Architecture


Mobile App ? Backend API ? Database

Technology Stack

Frontend (Mobile App)
Technology- Purpose
React Native (Expo)- Cross-platform mobile app
Expo Router- Navigation
Context API- State management

Backend

Technology- Purpose
Node.js + Express- REST API
JWT Authentication- Secure login
Cloud Hosting- Deployment

Database
Technology- Purpose
MongoDB Atlas- Cloud NoSQL Database

High Level System Architecture

User Mobile App
      ?
REST API Server (Node.js)
      ?
MongoDB Cloud Database


Communication Flow
1?User sends request from app
2? Backend validates request
3? Backend fetches/stores data in MongoDB
4? Response sent back to app

Seva Module
Users can:
* View seva list
* View seva details
* Book seva
* Make donation/payment

Admin can:
* Add/Edit/Delete sevas
* Update timings & price
  

Room Booking Module
Users can:
* Select dates
* Book rooms
* Submit request
Admin can:
* Approve/Reject bookings


Events & Panchanga Module
* Real-time festival updates
* Parayaya notifications
* Daily Panchanga
* 


Database Design (MongoDB Collections)
Users Collection

{
  _id,
  name,
  phone,
  email,
  address,
  createdAt
}

Sevas Collection
{
  _id,
  name,
  description,
  price,
  timings,
  category
}


Bookings Collection

{
  _id,
  userId,
  bookingType,
  sevaId / roomDetails,
  date,
  status
}


Events Collection


{
  _id,
  title,
  description,
  date,
  image
}


Security Design:

Security layers used:
* JWT Authentication
* API validation
* HTTPS communication
* No direct DB access from app


Scalability Plan
App is designed to handle:
* Thousands of devotees during Parayaya
* Real-time updates
* Cloud deployment ready
Future scaling:
* Add payment gateway
* Push notifications
* Admin dashboard

Deployment Architecture

Mobile App ? Cloud API ? MongoDB Atlas






Scalable database structure (Schema/ERD)


API Documentation (Swagger/OpenAPI specs)

Sode Matha App – API Documentation

Base URL
https://api.sodematha.com/api/v1

Authentication APIs

Send OTP
Json
{
  "phone": "9876543210"
}
Response
{
  "message": "OTP sent successfully"
}

Verify OTP (Login/Register)

Request
{
  "phone": "9876543210",
  "otp": "123456"
}
Response
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "u101",
    "name": "Ramesh"
  }
}
User APIs

Headers:
Authorization: Bearer JWT_TOKEN

Response:
Json

{
  "name": "Ramesh",
  "phone": "9876543210",
  "email": "ramesh@gmail.com"
}


Update Profile

Json
{
  "name": "Ramesh Kumar",
  "email": "rk@gmail.com"
}

Seva APIs

Response:
Json

[
  {
    "id": "s1",
    "name": "Annadana Seva",
    "price": 2000,
    "timings": "11:30 AM"
  }
]

Get Seva Details

Json

{
  "sevaId": "s1",
  "date": "2026-03-20",
  "amount": 2000
}

Response:
Json

{
  "message": "Seva booked successfully"
}


Room Booking APIs

Json

{
  "checkIn": "2026-03-10",
  "days": 2,
  "members": 4
}


Events APIs

GET /events

Gallery APIs

GET /gallery


Donation APIs
POST /donations
Json

{
  "amount": 1000,
  "purpose": "Annadana"
}


Quiz APIs

Json

{
  "score": 5
}

Notification APIs

GET /notifications
