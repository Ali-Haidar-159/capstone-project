Event Flow 🎫
University Club Event Management & Student Recommendation System

Event Flow is a full-stack event management platform designed specifically for university clubs and students. It makes it easier for university clubs to create, manage, and monitor events while allowing students to discover and register for events based on their department.

The system provides role-based access for Super Admins, Club Admins, and Students, along with event registration, registration fee management, QR-code-based attendance, and centralized monitoring.

✨ Key Features
🏛️ Super Admin — University

The Super Admin has overall control of the platform.

Create and manage university clubs
Assign/manage club administrators
Monitor all clubs and events
Monitor registrations and event activities
Manage the overall platform
👨‍💼 Admin — Club Moderator

Club Admins can manage their respective club activities.

Create and manage events
Set event registration fees
Manage event information
View registered participants
Monitor event registrations
Check participant information
Track event attendance
Scan QR codes for attendance
Monitor club-related activities
👨‍🎓 Normal User — Student

Students can easily discover and participate in university club events.

Browse available events
Get event recommendations based on department
View event details
Register for events
Submit required registration information
Pay the registration fee
Receive registration confirmation
Use QR code for event attendance
🎯 Why Event Flow?

Managing university club events manually can be time-consuming and inefficient.

Event Flow provides a centralized platform where:

Universities can manage multiple clubs.
Clubs can create and manage events easily.
Students can discover relevant events.
Events can be recommended based on students' departments.
Students can register online.
Registration fees can be managed through the platform.
Admins can monitor registrations.
Attendance can be recorded using QR code scanning.
Super Admins and Club Admins can monitor the entire event process.

This makes university club event management faster, easier, and more organized.

🛠️ Technologies Used
Frontend
React.js
TypeScript
Tailwind CSS
Backend
Node.js
TypeScript
Database
Supabase
PostgreSQL
Other Technologies
SSL
QR Code Scanner
Vercel — Frontend Deployment
🏗️ System Roles
Role	Responsibilities
Super Admin	Manage university clubs, administrators, events, and overall platform activities
Club Admin	Create and manage events, set registration fees, monitor registrations and attendance
Student	Browse events, receive recommendations, register for events, and participate
🔄 How It Works
                    ┌─────────────────────┐
                    │    Super Admin      │
                    │     University      │
                    └──────────┬──────────┘
                               │
                               │ Creates & Manages
                               ▼
                    ┌─────────────────────┐
                    │    University       │
                    │       Clubs         │
                    └──────────┬──────────┘
                               │
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Club Admin      │
                    │   Event Management  │
                    └──────────┬──────────┘
                               │
                     Creates Events
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Events        │
                    │  Fee + Registration │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Students       │
                    │ Event Recommendation│
                    └──────────┬──────────┘
                               │
                         Registration
                               │
                               ▼
                    ┌─────────────────────┐
                    │   QR Attendance     │
                    │      Scanner        │
                    └─────────────────────┘

📌 Main Modules
1. Club Management

The university's Super Admin can create and manage university clubs and assign administrators to those clubs.

2. Event Management

Club Admins can create events by providing:

Event title
Event description
Event date
Event time
Venue
Registration fee
Other required information
3. Event Recommendation

Event Flow recommends events to students according to their department, helping students discover events that are more relevant to them.

4. Online Registration

Students can register for an event directly through the application by filling out the required registration form.

5. Registration Fee

Events can have registration fees. Students can complete the registration process by providing the required registration information and registration fee.

6. QR Code Attendance

After registration, students can use their registration QR code for event attendance.

Club Admins can scan the QR code at the event venue to verify participants and record attendance.

7. Monitoring & Management

Both Super Admins and Club Admins can monitor important activities and information through the application.

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

Make sure you have the following installed:

Node.js
npm
Git

You will also need a Supabase project and the required environment variables.

📥 Clone the Repository

Open your terminal and run:

git clone https://github.com/Ali-Haidar-159/capstone-project.git


Then navigate into the project:

cd capstone-project

📦 Install Dependencies

If the project contains separate frontend and backend directories, install the dependencies for each part.

Frontend
cd frontend
npm install

Backend

Open another terminal and run:

cd backend
npm install


If your actual folder names are different, replace frontend and backend with the corresponding directory names.

🔐 Environment Variables

Create a .env file in the required project directories and add the necessary environment variables.

For example:

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key


For the backend, add any additional environment variables required by the application, such as:

PORT=5000
DATABASE_URL=your_database_url


Important: Never commit your .env files or Supabase secret/service-role keys to GitHub.

Make sure .env is included in your .gitignore:

.env
.env.local
.env.*.local

🗄️ Supabase Setup
Create a project in Supabase.
Configure the PostgreSQL database.
Create the required tables according to the project schema.
Configure authentication if required.
Add the Supabase credentials to your environment variables.
Make sure the backend and frontend are using the correct Supabase configuration.
▶️ Run the Project
Start the Backend
cd backend
npm run dev


The backend server should start on the configured port.

Start the Frontend

Open another terminal:

cd frontend
npm run dev


The frontend will be available at the local development URL shown in your terminal, usually:

http://localhost:5173

🌐 Deployment

The frontend of Event Flow is deployed using Vercel.

For production deployment:

Push the project to GitHub.
Import the repository into Vercel.
Configure the required environment variables.
Set the appropriate build settings.
Deploy the application.
🔒 Security

Event Flow uses several security-focused practices, including:

Role-based access control
Environment variables for sensitive configuration
SSL/HTTPS
Secure database communication
Supabase PostgreSQL
Protected administrative functionality
📱 Future Improvements

Some potential future improvements include:

Online payment gateway integration
Event notifications
Email/SMS notifications
Event analytics and reporting
Club performance dashboard
Student event history
Automated certificates
Mobile application
Advanced recommendation system
Real-time event notifications
👨‍💻 Project Information

Project Name: Event Flow

Project Type: University Club Event Management System

Purpose:
To simplify university club event management and provide students with an easy way to discover and register for relevant events.

Repository:

https://github.com/Ali-Haidar-159/capstone-project


Flow was developed as a capstone project with the goal of making university club event management easier, smarter, and more accessible for students.

Event Flow — Manage Events. Connect Students. Simplify Campus Life. 🎓
