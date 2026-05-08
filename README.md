# Playwright Automation Framework

This project is built using Playwright with JavaScript for end-to-end web application testing.

---

# 📦 Tech Stack

- Playwright
- JavaScript
- Node.js

---

# 📁 Project Structure

```text
project-root/
│
├── tests/                  # Test files
├── pages/                  # Page Object Model classes
├── utils/                  # Utility/helper files
├── fixtures/               # Test fixtures
├── playwright.config.js    # Playwright configuration
├── package.json
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone <repository-url>
```

## 2. Navigate to Project

```bash
cd project-name
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test File

```bash
npx playwright test tests/example.spec.js
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run Tests in Debug Mode

```bash
npx playwright test --debug
```

## Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
```

---

# 📊 Generate Test Report

```bash
npx playwright show-report
```

---

# 📸 Capture Screenshots & Videos

Configured inside:

```text
playwright.config.js
```

Example:

```js
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry'
}
```

---

# 🧪 Sample Test

```js
const { test, expect } = require('@playwright/test');

test('Verify homepage title', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);
});
```

---

# 🏗️ Page Object Model Example

```js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
```

---

# ⚙️ Useful Commands

| Command | Description |
|---|---|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Open Playwright UI mode |
| `npx playwright codegen` | Generate Playwright code |
| `npx playwright show-report` | Open HTML report |

---

# ✅ Best Practices

- Use Page Object Model (POM)
- Avoid hard waits (`waitForTimeout`)
- Prefer locators over XPath where possible
- Use reusable utilities and fixtures
- Keep assertions meaningful
- Use environment variables for credentials

---

# 📚 Resources

- Playwright Documentation  
  https://playwright.dev/

- Playwright API Reference  
  https://playwright.dev/docs/api/class-playwright

---

# 👨‍💻 Author

Mitesh Parmar