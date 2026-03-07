# 💗 Todo List App

A beautiful, feature-rich Todo application built with **Angular 19** and **Node.js/Express**.

![Todo App](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)

## ✨ Features

### Core Functionality
- ✅ **Full CRUD Operations** - Add, Edit, Delete, Complete tasks
- 🔍 **Real-time Search** - Filter tasks by text
- 📊 **Progress Tracking** - Visual progress bar showing completion percentage
- 🎉 **Celebration Animation** - Motivational message when all tasks complete

### Task Management
- 🔴🟡🟢 **Priority Levels** - High, Medium, Low with colored badges
- 📅 **Due Dates** - Set deadlines with overdue detection
- ⚠️ **Overdue Highlighting** - Red border and shake animation for past-due tasks
- ☑️ **Mark as Complete** - Checkbox functionality with strike-through

### Organization
- 🗂️ **Smart Filters** - View All, Active, or Completed tasks
- 🏷️ **Priority Badges** - Visual indicators with emoji icons
- 📋 **Empty States** - Friendly messages when no tasks exist

### UI/UX
- 🎨 **Beautiful Pink Theme** - Multiple shades with gradients
- ✨ **Smooth Animations** - Slide-in, pulse, and shake effects
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎯 **Intuitive Interface** - Clean, modern card-based layout

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup

```bash
cd todo-backend
npm install
node server.js
```

Server runs on `http://localhost:3000`

### Frontend Setup

```bash
cd todo-backend/todo-frontend
npm install
ng serve
```

App runs on `http://localhost:4200`

## 📦 Project Structure

```
todo-backend/
├── server.js          # Express backend server
├── package.json
└── todo-frontend/     # Angular frontend
    ├── src/
    │   └── app/
    │       ├── app.ts              # Main component
    │       ├── app.html            # Template
    │       ├── app.css             # Styles
    │       └── todo.service.ts     # API service
    └── package.json
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using Angular CLI GH Pages

```bash
cd todo-backend/todo-frontend
ng build --base-href /To_DoApp/
npx angular-cli-ghpages --dir=dist/todo-frontend/browser
```

### Option 2: Manual Deployment

1. Build the app:
```bash
ng build --base-href /To_DoApp/
```

2. Create `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git rm -rf .
```

3. Copy built files:
```bash
cp -r todo-frontend/dist/todo-frontend/browser/* .
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

5. Enable GitHub Pages:
   - Go to repository **Settings** > **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
   - Save

## 🔧 API Endpoints

### GET /todos
Returns all todos

### POST /todos
Create a new todo
```json
{
  "text": "Task name",
  "priority": "high|medium|low",
  "dueDate": "2026-03-15" 
}
```

### PUT /todos/:id
Update a todo
```json
{
  "text": "Updated text",
  "completed": true,
  "priority": "medium",
  "dueDate": "2026-03-20"
}
```

### DELETE /todos/:id
Delete a todo

## 🎨 Color Palette

- **Primary Pink**: `#ff2e93`
- **Light Pink**: `#ff7ab6`, `#ffb6d9`, `#ffc0e0`
- **Background**: `#ffe6f0`
- **High Priority**: `#ff4d6d` (Red)
- **Medium Priority**: `#ffd93d` (Yellow)
- **Low Priority**: `#6bcf7f` (Green)

## 📸 Screenshots

### Main View
- Todo list with priority badges and due dates
- Progress bar showing completion
- Search and filter options

### Features in Action
- ✅ Add tasks with priority and due date
- ✏️ Edit tasks inline
- 🗑️ Delete with confirmation
- 🔍 Search functionality
- 📊 Real-time progress tracking

## 🛠️ Technologies Used

### Frontend
- **Angular 19** - Modern web framework
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming
- **FormsModule** - Two-way data binding
- **CommonModule** - Angular directives

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **CORS** - Cross-origin support
- **In-memory storage** - Fast development

## 🌟 Future Enhancements

- [ ] MongoDB integration for persistent storage
- [ ] User authentication and multi-user support
- [ ] Drag & drop task reordering
- [ ] Dark mode theme
- [ ] Recurring tasks
- [ ] Browser notifications for due dates
- [ ] Categories/tags for tasks
- [ ] Export/import functionality
- [ ] Task notes/descriptions
- [ ] Subtasks support

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Siphosethu Msengeni**
- GitHub: [@SiphosethuMsengeni](https://github.com/SiphosethuMsengeni)
- Repository: [To_DoApp](https://github.com/SiphosethuMsengeni/To_DoApp)

## 🙏 Acknowledgments

- Built with Angular and Node.js
- Inspired by modern task management apps
- Pink theme for a friendly, approachable design

---

Made with 💗 by Siphosethu Msengeni © 2026
