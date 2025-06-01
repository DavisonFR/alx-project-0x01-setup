# ALX Project 0x01 - Next.js Setup  

## 📌 Overview  
This repository contains the setup for a **Next.js project** with **TypeScript, ESLint, Tailwind CSS**, and import aliases. It serves as the foundation for building scalable applications.  

## 🛠️ Tech Stack  
- [Next.js](https://nextjs.org/) - React Framework  
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript  
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling  
- [ESLint](https://eslint.org/) - Code linting & formatting  

## 📁 Directory Structure  
alx-project-0x01/ │-- components/ │ ├── common/ │ │ ├── Button.tsx │ │ ├── PostCard.tsx │ ├── layout/ │ │ ├── Header.tsx │ │ ├── Footer.tsx │-- pages/ │ ├── index.tsx │ ├── posts/ │ │ ├── index.tsx │ ├── users/ │ │ ├── index.tsx │-- public/ │ ├── assets/ │ │ ├── images/ │-- styles/ │ ├── global.css

## 🚀 Getting Started  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/DavisonFR/alx-project-0x01-setup.git
cd alx-project-0x01
2️⃣ Install Dependencies
sh
npm install
3️⃣ Start the Development Server
sh
npm run dev -- -p 3000
4️⃣ Open in Browser
http://localhost:3000
✔ You should see the "Welcome Page"! 🎉

🔧 Setup Details
Global Styles: styles/global.css configured for Tailwind CSS.

Page Routing: pages/index.tsx, pages/posts/index.tsx, pages/users/index.tsx.

Component Structure: Common reusable components in components/common/, layout components in components/layout/.

📜 License
This project is open-source. Feel free to use and modify it! 