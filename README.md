# 🏞️ The National Parks of America — Carousel App

A modern, lightweight, and responsive web application featuring an interactive carousel to explore US National Parks. The data is fetched dynamically in real-time from the official **NPS (National Park Service) API**.

The project is built using clean JavaScript (ES6+) following a modular feature-based architecture and modern build workflows.

---

## 🚀 Features

* **Real-time Data:** Complete integration with the official government United States National Park Service API.
* **Smart UI Loading:** Implements a smooth, non-blocking top linear progress bar (`linear-progress`) to elevate UX while waiting for server responses.
* **Data Filtering Optimization:** Automatically filters out API records missing high-quality images, ensuring every slide renders a beautiful photo background.
* **Clean & Minimal Architecture:** Free from redundant files and overhead abstractions (eliminated dead code; entry point routes directly through the carousel feature module).
* **Modern Tooling:** Configured with clean absolute path aliases (`@common`, `@styles`) and utilizes the Sass `modern-compiler` flag for clean, warning-free style compilations.

---

## 🛠️ Tech Stack

* **Core:** JavaScript (ES6+), HTML5
* **Styling:** SCSS (Sass Dart with Modern API compiler option)
* **Build Tool:** Vite 6.x
* **Code Quality:** ESLint, Prettier
* **Data Source:** [NPS API Documentation](https://www.nps.gov/subjects/developer/api-documentation.htm)

---

## 📂 Project Structure

## 📂 Project Structure

```text
national-parks-carousel/
├── src/                    # Source code
│   ├── common/             # Shared constants and global style variables
│   │   ├── constants/
│   │   └── scss/
│   ├── features/           # Isolated modular features
│   │   └── ParkCarousel/   # Main carousel mechanism, components, and gateways
│   └── styles/             # Main style sheets and component layouts
├── index.html              # Main application entry point
├── vite.config.js          # Vite development and build configuration
└── package.json
```

## 💻 Installation & Local Usage

1. **Clone the repository:**   
  ```bash
  git clone https://github.com/i1yaremechko/national-parks-carousel.git
  cd national-parks-carousel
  ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

   The application will automatically open in your browser at http://localhost:3000/.

---

Developed by Ivan Yaremechko as part of advanced frontend training at Gromcode. Ukraine, 2026.