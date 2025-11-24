# MindFlow.

![MindFlow Banner](public/blog.png)

> **Where good ideas find their voice.**  
> A minimalist, distraction-free platform for writers and thinkers.

### 🚀 [View Live Demo](https://mind-flow-task.vercel.app/)

---

## 📖 About

**MindFlow** is a modern blogging platform built to prioritize content over clutter. Moving away from generic designs, MindFlow features a "Zen Mode" writing experience, a high-performance glassmorphism UI, and a custom-built theming engine.

The goal was to create an application that feels like a premium product—combining the speed of a Single Page Application (SPA) with the aesthetic of a high-end digital magazine.

## ✨ Key Features

### 🎨 User Experience (UX/UI)
- **Glassmorphism Design:** Deep visual depth using backdrop filters, translucency, and subtle gradients.
- **Zen Editor:** A distraction-free writing interface that removes all UI clutter, focusing purely on the Title and Story.
- **Dynamic Theming:** A custom-built CSS Variable system (Light/Dark mode) that decouples logic from specific Tailwind colors.
- **Split-Screen Auth:** Beautifully designed Login and Register pages with contextual visuals and quotes.

### ⚙️ Functionality
- **Authentication:** Full simulation of User Registration, Login, and Persistence using local storage.
- **CRUD Operations:** Create, Read, Update, and Delete stories instantly.
- **Protected Routes:** Dashboard and Editor pages are guarded against unauthenticated access.
- **Visual Feedback:** Custom loading states, empty states, and hover micro-interactions.

## 🛠 Tech Stack

*   **Core:** [React.js](https://reactjs.org/) (Vite)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand) (with Persist Middleware)
*   **Routing:** [React Router DOM v6](https://reactrouter.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Validation:** [Yup](https://github.com/jquense/yup)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/mindflow.git
    cd mindflow
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Visit `http://localhost:5173` in your browser.

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI components (Navbar, PostCard, Layout)
├── hooks/           # Custom Logic (useAuth, usePosts, useThemeStore)
├── pages/           # Full Application Pages (Home, Dashboard, Editor)
├── index.css        # Global Styles & CSS Variables definition
├── main.jsx         # Entry point
└── App.jsx          # Routing & Theme Integration