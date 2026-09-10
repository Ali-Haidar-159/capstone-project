# Event Flow

Event Flow is a university club event management platform that makes it easier to create, manage, discover, register, and monitor university club events.

The system also recommends relevant events to students based on their department.

## Features

- Super Admin can create and manage university clubs.
- Super Admin can monitor clubs, events, users, and registrations.
- Club Admin/Moderator can create and manage events.
- Admin can set event registration fees.
- Students can browse and discover events.
- Students can get department-based event recommendations.
- Students can register through an online registration form.
- Students can pay registration fees when required.
- QR code-based attendance system.
- Admin and Super Admin can monitor event activities and attendance.

## User Roles

| Role | Responsibility |
|------|----------------|
| Super Admin | Manage university clubs, admins, events, users, and overall activities |
| Admin | Manage club events, fees, registrations, and attendance |
| Normal User | Discover events, register, and attend events |

## QR Code Attendance

Students receive a QR code after successful registration. Admins can scan the QR code during the event to verify registration and record attendance.

```text
Student Registration
        ↓
Registration Confirmed
        ↓
QR Code Generated
        ↓
Event Day
        ↓
Admin Scans QR Code
        ↓
Attendance Recorded
