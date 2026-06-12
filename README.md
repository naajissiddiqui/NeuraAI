# 🚀 NeuraAI - AI-Powered Career Guidance Platform
## 📌 Overview

**NeuraAI** is an AI-powered career guidance platform designed to help students, fresh graduates, and professionals streamline their job application journey. The platform leverages **Google Gemini AI** to provide intelligent career assistance through ATS-friendly resume creation, personalized cover letter generation, and AI-driven interview preparation.

The goal of NeuraAI is to reduce the time and effort required to prepare professional job application materials while increasing the chances of securing interviews and job opportunities.

---

# ✨ Features

## 📄 AI Resume Builder

Create professional and ATS-friendly resumes through a guided form-based process.

### Key Features

- ATS-friendly resume generation
- Professional resume templates
- Resume section management
- Skills and experience optimization
- AI-powered resume improvement suggestions
- Structured formatting for recruiter systems

### Resume Sections

- Personal Information
- Education
- Work Experience
- Projects
- Skills
- Certifications
- Achievements

---

## 🤖 AI Resume Enhancement

Improve resume content using Gemini AI.

### Capabilities

- Professional language refinement
- Action-oriented bullet points
- Grammar and clarity improvements
- Skill highlighting
- ATS optimization recommendations

---

## ✉️ AI Cover Letter Generator

Generate personalized cover letters tailored to specific job applications.

### Inputs

- Job Title
- Company Name
- Industry
- Applicant Details
- Skills and Experience

### Outputs

- Personalized cover letter
- Professional tone
- Industry-specific content
- ATS-friendly structure

---

## 🎯 AI Interview Preparation

Practice for interviews using AI-generated assessments.

### Features

- Domain-specific MCQs
- Dynamic question generation
- Performance evaluation
- Instant feedback
- Skill-gap identification

### Supported Domains

- Software Development
- Web Development
- Artificial Intelligence
- Data Science
- Cybersecurity
- Cloud Computing
- General Technical Roles

---

## 📊 Industry Insights Dashboard

Provides AI-generated industry analysis and career recommendations.

### Insights Include

- Salary Ranges
- Demand Levels
- Industry Growth Rate
- Market Outlook
- Trending Technologies
- Recommended Skills
- Career Opportunities

---

## 🔐 Authentication & User Management

Secure user authentication powered by Clerk.

### Features

- Sign Up / Sign In
- Session Management
- Protected Routes
- User Profile Management
- Secure Authentication Flow

---

# 🏗️ System Architecture

```text
┌─────────────────────┐
│      Frontend       │
│    Next.js + React  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Next.js Actions   │
│      Backend        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Prisma ORM      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    PostgreSQL DB    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Google Gemini AI API│
└─────────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

- Next.js 15
- React.js
- Tailwind CSS
- ShadCN UI
- Lucide React
- React Hook Form

## Backend

- Next.js Server Actions
- Node.js

## Database

- PostgreSQL
- Prisma ORM

## Authentication

- Clerk Authentication

## AI Integration

- Google Gemini AI API

## Validation

- Zod

## Data Visualization

- Recharts

## Deployment

- Vercel

---

# 📂 Project Structure

```text
NeuraAI/
│
├── app/
│   ├── (auth)/
│   ├── (main)/
│   │   ├── dashboard/
│   │   ├── interview/
│   │   ├── resume/
│   │   ├── cover-letter/
│   │   └── onboarding/
│
├── actions/
│   ├── dashboard.js
│   ├── user.js
│   ├── interview.js
│   └── resume.js
│
├── components/
│   ├── ui/
│   ├── forms/
│   └── dashboard/
│
├── lib/
│   ├── prisma.js
│   └── utils.js
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/NeuraAI.git

cd NeuraAI
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

GEMINI_API_KEY=
```

## Setup Prisma

Generate Prisma Client:

```bash
npx prisma generate
```

Run Database Migrations:

```bash
npx prisma migrate dev
```

## Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# 🧠 AI Workflow

## Resume Enhancement Workflow

```text
User Input
     │
     ▼
Resume Builder
     │
     ▼
Gemini AI Processing
     │
     ▼
ATS Optimization
     │
     ▼
Enhanced Resume
```

---

## Cover Letter Generation Workflow

```text
Job Details
     │
     ▼
Prompt Generation
     │
     ▼
Gemini AI
     │
     ▼
Personalized Cover Letter
```

---

## Interview Preparation Workflow

```text
Selected Domain
     │
     ▼
Gemini AI Question Generation
     │
     ▼
MCQ Assessment
     │
     ▼
Feedback & Score Analysis
```

---

# 🎯 Use Cases

### Students

- Build professional resumes
- Generate internship cover letters
- Practice technical interviews

### Fresh Graduates

- Improve job application quality
- Prepare for placement drives
- Learn industry-relevant skills

### Professionals

- Career transitions
- Resume enhancement
- Interview preparation

### Educational Institutions

- Career counseling assistance
- Placement preparation support
- Skill assessment programs

---

# 📈 Future Enhancements

- Resume PDF Export
- AI Career Roadmap Generator
- LinkedIn Profile Analyzer
- Job Recommendation Engine
- Skill Gap Analysis
- Voice-Based Mock Interviews
- Real-Time Interview Simulation
- Multi-Language Support
- Company-Specific Interview Preparation

---

# 🔒 Security Features

- Clerk Authentication
- Protected Routes
- Secure API Key Management
- Server-Side Validation
- Input Sanitization
- Database Access Control

---

# 📊 Expected Impact

NeuraAI aims to:

- Improve ATS compatibility of resumes
- Reduce resume creation time
- Enhance interview readiness
- Simplify cover letter generation
- Provide actionable career insights
- Increase job application success rates

---

# 👨‍💻 Author

Developed as an AI-powered career guidance platform to simplify the job application process and improve career readiness through intelligent automation.

---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub and contributing to future enhancements.
