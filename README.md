# 🧪 E-Commerce QA Testing Suite

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Vitest](https://img.shields.io/badge/vitest-4.1.0-yellow)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.2.2-blue)

> A professional QA testing suite built on top of a React e-commerce application.  
> This project demonstrates my approach to software quality: **unit tests first, clean architecture, and CI/CD automation.**

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 5 |
| Build tool | Vite 5 |
| Testing | Vitest + Testing Library |
| UI | MUI (Material UI) + Tailwind CSS |
| State | Context API + useReducer |
| Data fetching | TanStack React Query |

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm run dev
```

### Run the tests
```bash
npm test
```

### Run tests with UI
```bash
npm run test:ui
```

---

## ✅ Test Coverage

### Unit Tests

| Component / Module | Test | Status |
|-------------------|------|--------|
| `Button` | Renders with correct text | ✅ |
| `Button` | Calls onClick handler when clicked | ✅ |

### Coming Soon

| Component / Module | Test | Status |
|-------------------|------|--------|
| `Button` | Is disabled when disabled prop is true | 🔜 |
| `reducer` | Updates products on `products/fetched` | 🔜 |
| `reducer` | Updates cartCount on `cart/added` | 🔜 |
| `reducer` | Updates cartCount on `cart/removed` | 🔜 |
| `CartCount` | Displays correct cart count | 🔜 |
| `ProductItem` | Renders product title and price | 🔜 |

---

## 📁 Project Structure

```
src/
├── common/
│   ├── design-system/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── __test__/
│   │           └── Button.test.tsx ✅
│   └── layout/
│       └── Header/
├── features/
│   ├── cart/
│   │   ├── add-cart-product/
│   │   ├── display-cart-count/
│   │   ├── list-cart-products/
│   │   └── remove-cart-product/
│   ├── common/
│   │   ├── actions/
│   │   ├── reducer/
│   │   └── state/
│   └── product/
│       ├── display-product/
│       ├── list-products/
│       └── search-products/
```

---

## 🔍 QA Philosophy

> *"The build is easy. Reliability is rare."*

This project follows these QA principles:

- **Test behavior, not implementation** — using Testing Library's user-centric approach
- **Unit tests first** — isolate components and pure functions
- **Conventional commits** — every commit is traceable and meaningful
- **CI/CD ready** — GitHub Actions will run tests on every push

---

## 👩🏿‍💻 Author

**Fatou Cissé** — AI Reliability & QA Engineer  
[GitHub](https://github.com/AIbyFatou) · [Malt](https://www.malt.fr) · contact@aibyfatou.com