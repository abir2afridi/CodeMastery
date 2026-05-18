# CODEMASTERY — DJANGO TRACK ADDITION
# Add Django as a 20th track to the existing CodeMastery platform
# Full-stack Python web framework · ORM · Authentication · APIs · Deployment

================================================================================
OVERVIEW
================================================================================

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a COMPLETE Django learning track.

IMPORTANT:
This is NOT a generic Python course. Django depends on Python knowledge.

At the beginning of chapters that require Python concepts:
- Show "🐍 Python Prerequisite" callouts
- Link to related Python chapters already existing in CodeMastery
- NEVER fully reteach Python basics
- Focus ONLY on Django concepts and framework-specific architecture

This track must take students from:
- Django absolute beginner
→ Full-stack Django developer
→ REST API developer
→ Deployment-ready production developer

The track must match the SAME QUALITY STANDARDS as all existing tracks:
- No placeholder content
- Real production-level explanations
- Fully working code
- Real projects
- Real authentication systems
- Real database integration
- Real deployment workflows

================================================================================
TRACK METADATA
================================================================================

Create:
/lib/curriculum/django-curriculum.ts

Add "django" to Track type union.

Track metadata:
- id: "django"
- title: "Django"
- tagline: "Build powerful web applications with Python"
- icon: "🎸"
- color: "#092E20"
- totalChapters: 60
- estimatedHours: 110

================================================================================
DJANGO DEVELOPMENT ENVIRONMENT
================================================================================

Django requires a REAL backend runtime.

Implement:
- Local server execution support
- Terminal panel
- SQLite database integration
- API testing panel
- Django project sandbox environment

For learning pages:
- Embedded Django preview explanations
- Request/response visualizer
- ORM query visualizer
- Database table explorer

================================================================================
DJANGO CURRICULUM — 60 CHAPTERS
================================================================================

=== PART 1: DJANGO FOUNDATIONS (Chapters 1–10) ===

Chapter 1: What Is Django and Why Use It?
- History of Django
- MTV architecture
- Django vs Flask vs FastAPI
- Why companies use Django
- Real-world apps built with Django
- Batteries-included philosophy
- Understanding backend frameworks
- Django request lifecycle

Chapter 2: Installing Django and Creating First Project
- Python virtual environments
- pip install django
- django-admin startproject
- manage.py explained
- Project structure
- Running development server
- settings.py overview
- urls.py basics

Chapter 3: Django Apps and Project Architecture
- startapp command
- Apps vs projects
- Modular architecture
- INSTALLED_APPS
- App structure deep dive
- Best practices for scalable projects

Chapter 4: URLs and Routing
- path()
- re_path()
- Dynamic URL parameters
- Slugs
- URL namespaces
- include()
- Reverse URL lookups
- Named routes

Chapter 5: Views in Django
- Function-based views
- Request and response objects
- HttpResponse
- render()
- redirect()
- JSON responses
- File responses
- Request methods

Chapter 6: Django Templates
- Template engine
- Variables
- Loops
- Conditions
- Template inheritance
- Includes
- Filters
- Custom template tags
- Static files

Chapter 7: Models and Databases
- ORM introduction
- SQLite integration
- Models.Model
- Fields
- Migrations
- Relationships
- CRUD operations
- Model methods
- Admin integration

Chapter 8: Django Admin Panel
- Admin site setup
- Model registration
- Custom admin panels
- Search and filters
- Inline models
- Admin customization
- Production admin security

Chapter 9: Forms and User Input
- Django forms
- Model forms
- Validation
- CSRF protection
- Error handling
- Widgets
- Form security

Chapter 10: Static Files and Media Uploads
- Static folder setup
- CSS and JS serving
- User uploads
- MEDIA_URL
- MEDIA_ROOT
- Image uploads
- File handling

=== PART 2: AUTHENTICATION & USERS (Chapters 11–18) ===

Chapter 11: Authentication System Basics
Chapter 12: User Registration and Login
Chapter 13: Password Hashing and Security
Chapter 14: Sessions and Cookies
Chapter 15: User Permissions and Groups
Chapter 16: Custom User Models
Chapter 17: Authentication Middleware
Chapter 18: OAuth and Social Login

=== PART 3: ADVANCED DJANGO (Chapters 19–32) ===

Chapter 19: Class-Based Views
Chapter 20: Generic Views
Chapter 21: Middleware Deep Dive
Chapter 22: Signals
Chapter 23: Query Optimization
Chapter 24: Caching
Chapter 25: Pagination
Chapter 26: Context Processors
Chapter 27: Custom Managers and QuerySets
Chapter 28: Transactions
Chapter 29: Django Security Best Practices
Chapter 30: Environment Variables
Chapter 31: Logging and Monitoring
Chapter 32: Async Django Basics

=== PART 4: DJANGO REST FRAMEWORK (Chapters 33–42) ===

Chapter 33: Introduction to DRF
Chapter 34: Serializers
Chapter 35: API Views
Chapter 36: ViewSets and Routers
Chapter 37: Authentication in APIs
Chapter 38: Permissions
Chapter 39: Pagination and Filtering
Chapter 40: File Upload APIs
Chapter 41: JWT Authentication
Chapter 42: API Testing

=== PART 5: DATABASES & DEPLOYMENT (Chapters 43–50) ===

Chapter 43: PostgreSQL with Django
Chapter 44: Database Optimization
Chapter 45: Raw SQL in Django
Chapter 46: Redis Integration
Chapter 47: Celery Background Tasks
Chapter 48: Dockerizing Django
Chapter 49: Deploying Django Applications
Chapter 50: Nginx + Gunicorn Setup

=== PART 6: PROJECTS (Chapters 51–60) ===

Chapter 51: Blog Platform Project
Chapter 52: Authentication App Project
Chapter 53: Todo App with API
Chapter 54: E-Commerce Backend
Chapter 55: Chat Application
Chapter 56: Social Media Backend
Chapter 57: REST API Project
Chapter 58: Admin Dashboard
Chapter 59: Full Deployment Project
Chapter 60: Django Mastery Recap + Certificate Prep

================================================================================
DJANGO TECHNICAL REQUIREMENTS
================================================================================

1. Django server integration
2. SQLite database support
3. API playground
4. Authentication simulation
5. Database visualizer
6. ORM query visualizer
7. Request/response inspector
8. Django terminal panel
9. File upload simulation
10. Environment variable support

================================================================================
QUALITY REQUIREMENTS
================================================================================

- Every chapter: 400+ words per section
- Every chapter: 8+ quiz questions
- Every chapter: 3+ exercises
- Every project must fully work
- All code must be production-ready
- Secure authentication practices
- Real deployment workflows
- No fake backend logic
- Real database operations
- Real API endpoints
- Real CRUD systems

================================================================================
IMPLEMENTATION REQUIREMENTS
================================================================================

1. Add Django to dashboard
2. Add Django compiler/runtime
3. Create django-curriculum.ts
4. Add Django certificates
5. Add progress tracking
6. Add Django playground
7. Add API explorer
8. Add deployment simulator
9. Add ORM visualizer
10. Test all projects fully

================================================================================
FINAL RULE
================================================================================

DO NOT USE PLACEHOLDER CONTENT.
ALL CHAPTERS MUST CONTAIN FULL REAL EDUCATIONAL CONTENT.
ALL CODE MUST RUN CORRECTLY.
ALL PROJECTS MUST BE COMPLETE.
FOLLOW THE SAME DEPTH AND QUALITY AS OTHER CODEMASTERY TRACKS.