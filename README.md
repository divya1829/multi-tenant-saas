# Multi-Tenant SaaS Platform – Project & Task Management

## Overview
This project is a production-ready multi-tenant SaaS application that allows multiple organizations (tenants) to manage users, projects, and tasks with strict data isolation and role-based access control (RBAC).

Each tenant operates independently, ensuring secure and isolated access to its data. The application is fully dockerized and initializes automatically with database migrations and seed data.

---

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** JWT
- **Security:** bcrypt password hashing
- **Containerization:** Docker & Docker Compose

---

## Architecture Overview
- Multi-tenant architecture using `tenant_id`
- Role-Based Access Control:
  - `super_admin`
  - `tenant_admin`
  - `user`
- Automatic database migrations and seed data
- Dockerized services for consistency and reproducibility

---

## Services & Ports

| Service | URL |
|--------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |
| Health Check | http://localhost:5000/health |

---

## Project Features
- Multi-tenant data isolation
- User and role management
- Project management per tenant
- Task tracking per project
- Secure authentication foundation
- Automatic database initialization
- Single-command startup using Docker

---

## How to Run the Project

### Prerequisites
- Docker
- Docker Compose

### Run Application (Single Command)
```bash
docker-compose up --build
