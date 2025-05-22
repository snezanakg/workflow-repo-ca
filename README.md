# Workflow repo for the CA

# 🛠️ Workflow Repo CA

This repository is part of the Noroff **Workflow Course Assignment**. The goal is to improve development efficiency and code quality using modern tooling, including:

- **ESLint** (for linting)
- **Prettier** (for formatting)
- **Vitest** (for unit testing)
- **Playwright** (for end-to-end testing)
- **Husky** (for Git commit hooks)

---

## 📦 Project Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/workflow-repo-ca.git
cd workflow-repo-ca
npm install
Start the dev server:
npm run dev
🧪 Testing
Unit Tests (Vitest)
Run all unit tests:
npm run test
Tested functions:

isActivePath()

getUserName() (using mock local storage)

End-to-End Tests (Playwright)
Run all e2e tests:
npm run test:e2e
Tested features:

✅ Login with valid credentials from .env

❌ Login with invalid credentials shows error

🧭 Navigation from home page to venue details


⚙️ Scripts
Command	Description
npm run dev	Run Vite dev server with Tailwind watcher
npm run test	Run Vitest unit tests
npm run test:e2e	Run Playwright end-to-end tests
npm run lint	Lint all JS files using ESLint
npm run format	Format code using Prettier


🧼 Commit Hooks
Husky ensures that files are linted and formatted before each commit.

No bad code reaches your repo 🚫💩


🌍 Environment Variables
Your .env file should include:
VITE_EMAIL=your@email.com
VITE_PASSWORD=yourpassword
⚠️ Don't commit .env files!
Use .env.example to document required variables.


🧾 Branching
Work is done in a branch called workflow

Pull requests should target the default main branch



🧠 Learning Outcomes
Knowledge of JavaScript productivity tools

Can configure automated testing and linting

Understands Git branching and pull requests

Can validate functionality using unit + e2e tests








