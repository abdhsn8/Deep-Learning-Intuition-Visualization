# Contributing to Deep Learning Intuition Visualizer 🧠✨

Thank you for your interest in contributing to the Deep Learning Intuition Visualizer! Contributions from students, educators, and developers are welcome.

Here is a guide to help you get started with contributing to this project.

---

## 🛠️ Getting Started

### 1. Fork and Clone the Repository
1. Go to [https://github.com/abdhsn8/Deep-Learning-Intuition-Visualization](https://github.com/abdhsn8/Deep-Learning-Intuition-Visualization).
2. Click **Fork** in the top-right corner to create a copy of the repository under your own GitHub account.
3. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Deep-Learning-Intuition-Visualization.git
   cd Deep-Learning-Intuition-Visualization
   ```

### 2. Set Up the Local Environment
You will need **Node.js** installed on your system.
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Run the application in development mode:
   ```bash
   npm start
   ```

---

## 🚀 How to Contribute

### 1. Creating a Branch
Before making any code changes, create a new branch describing your feature or fix:
```bash
git checkout -b feature/your-feature-name
```

### 2. Implementing Changes
* **Frontend Modules:** All user interface and visualizer logic is inside the `app/` folder.
* **Electron Core:** Desktop wrapper configs are defined in `main.js` and `package.json`.
* Be sure to write clean, documented code.

### 3. Testing Locally
Verify that your changes work correctly by running `npm start` and interacting with your new changes in the visualizer window.

To compile/build the installer on Windows locally, you can run:
```bash
npm run build:win
```

---

## 📬 Submitting a Pull Request (PR)

1. Commit and push your changes to your fork:
   ```bash
   git add .
   git commit -m "Add [feature/fix description]"
   git push origin feature/your-feature-name
   ```
2. Open your fork on GitHub and click the **"Compare & pull request"** button.
3. Provide a clear description of your changes, what module they affect, and link any associated issues.
4. Submit the Pull Request. I (or one of the repository moderators) will review it and merge it!

---

## 💬 Code of Conduct & Rules
* Be respectful and helpful to other students.
* Ensure code changes are well-structured and don't break existing visualizers.
* Do not check compiled installers (folders like `dist/` or `node_modules/`) into Git. They are automatically ignored by `.gitignore`.
