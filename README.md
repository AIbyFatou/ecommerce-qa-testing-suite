# 🧪 E-Commerce QA Testing Suite

[![CI](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/ci.yml/badge.svg)](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/ci.yml)
![Vitest](https://img.shields.io/badge/vitest-4.1.0-yellow)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.2.2-blue)

> **"The build is easy. Reliability is rare."**
> A professional-grade QA infrastructure for mission-critical e-commerce platforms.
> This project focuses on **high-confidence deployments** through automated validation and clean architecture.

---

## 🏗️ Technical Architecture

This suite is built to handle complex state transitions and UI interactions with a **zero-regression** objective.

| Layer | Stack | Purpose |
|-------|-------|---------|
| **Core** | React 18 + TS 5 | Type-safe component architecture |
| **Testing** | Vitest + RTL | High-performance unit & integration testing |
| **State** | useReducer + Context | Predictable state management validation |
| **CI/CD** | GitHub Actions | Automated quality gates on every push |

---

## ✅ Quality Coverage

### Core Business Logic (Reducers)
- [x] **State Integrity:** Validate product injection on `products/fetched`
- [x] **Cart Logic:** Precise tracking of `cartCount` for add/remove operations
- [x] **Data Persistence:** Mocked API responses to ensure predictable state updates

### UI / Design System
- [x] **Component Reliability:** Button state validation (loading, disabled, interaction)
- [x] **Event Handling:** Strict `onClick` handler verification
- [x] **Visual Rendering:** ProductItem name, price and image display validation
- [x] **Fallback Handling:** Panorama icon when no picture is provided

---

## 🚀 Engineering Roadmap

Current focus: **Expanding the coverage of the core checkout flow.**

- [x] **Visual Consistency:** `ProductItem` rendering benchmarks ✅
- [ ] **Integration:** `CartCount` real-time sync with global state
- [ ] **E2E:** Implementation of Cypress for critical path validation (Checkout)

---

## 📁 Scalable Structure

The project follows a **Feature-Based Architecture**, making it easy to scale and test in isolation:
```text
src/
├── common/             # Shared Design System & Layout
├── features/           # Domain-driven modules (Cart, Product, etc.)
│   ├── cart/           # Isolated logic for cart management
│   └── product/        # Product discovery & search logic
└── __mocks__/          # Standardized data sets for testing
```

---

## 🔍 Reliability Philosophy

- **User-Centric Testing:** We test behaviors (what the user sees), not implementation details
- **Atomic Validation:** Every pure function and reducer is isolated for 100% predictability
- **Traceable Progress:** Conventional commits and structured PRs for full auditability

---

## 👩🏿‍💻 Contact

**Fatou Cissé** — QA Engineer & AI Reliability  
[GitHub](https://github.com/AIbyFatou) · [Malt](https://www.malt.fr/profile/fatoucisse) · contact@aibyfatou.com