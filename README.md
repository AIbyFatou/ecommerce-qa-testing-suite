# 🧪 E-Commerce QA Testing Suite

[![CI](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/ci.yml/badge.svg)](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/ci.yml)
[![Playwright Tests](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/playwright.yml/badge.svg)](https://github.com/AIbyFatou/ecommerce-qa-testing-suite/actions/workflows/playwright.yml)
![Vitest](https://img.shields.io/badge/vitest-4.1.0-yellow)
![Playwright](https://img.shields.io/badge/playwright-1.59.1-green)
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
| **Unit & Integration** | Vitest + RTL | High-performance unit & integration testing |
| **E2E** | Playwright | Critical path validation across real browsers |
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

### E2E — Catalogue
- [x] **Product Display:** At least one product image is visible on load
- [x] **Data Integrity:** All products rendered with correct name and price (dynamic — driven by `productsData`)
- [x] **Search Bar:** Placeholder visible and accessible

### E2E — Cart
- [x] **Initial State:** Cart counter displays 0 on page load
- [x] **Increment:** Counter increments dynamically after each product added
- [x] **Cart Content:** 1 item displayed in cart after adding a product
- [x] **No Duplicate:** Same product cannot be added twice
- [ ] **Decrement:** Cart counter not updated after removal — `useRemoveFromCart` not yet implemented *(bug detected by E2E tests)*

---

## 🐛 Bug detected by E2E tests

> `useRemoveFromCart` is not yet implemented — the cart counter does not update after product removal.  
> Tracked for next iteration.

---

## 🚀 Engineering Roadmap

- [x] Unit & integration tests with Vitest + RTL
- [x] E2E tests with Playwright — catalogue & cart
- [x] CI/CD with GitHub Actions — quality gates on every push
- [ ] Fix `useRemoveFromCart` — cart counter sync after removal
- [ ] E2E — Checkout critical path
- [ ] `CartCount` real-time sync with global state

---

## 📁 Scalable Structure

```text
src/
├── common/             # Shared Design System & Layout
├── features/           # Domain-driven modules (Cart, Product, etc.)
│   ├── cart/           # Isolated logic for cart management
│   └── product/        # Product discovery & search logic
└── __mocks__/          # Standardized data sets for testing

e2e/
├── catalogue.spec.ts   # E2E tests — product catalogue
├── cart.spec.ts        # E2E tests — cart interactions
└── fixtures/
    └── productsData.ts # Pure data source — no assets, importable everywhere
```

---

## 🔍 Reliability Philosophy

- **User-Centric Testing:** We test behaviors (what the user sees), not implementation details
- **Atomic Validation:** Every pure function and reducer is isolated for 100% predictability
- **Testability by Design:** `data-testid` attributes added strategically — decoupled from CSS
- **Dynamic assertions:** No hardcoded values — tests read live data to stay robust
- **Traceable Progress:** Conventional commits and structured PRs for full auditability

---

## 👩🏿‍💻 Contact

**Fatou Cissé** — QA Engineer & AI Reliability  
[GitHub](https://github.com/AIbyFatou) · [Malt](https://www.malt.fr/profile/fatoucisse) · contact@aibyfatou.com