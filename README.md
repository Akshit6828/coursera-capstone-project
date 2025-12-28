# Little Lemon Restaurant - Front-End Capstone Project

This project is a table booking web application for the Little Lemon restaurant, built as part of the Meta Front-End Developer Professional Certificate Capstone course.

## Project Overview

The application is a responsive web app that allows users to:
- Browse the restaurant's menu and specials.
- Values displayed in **INR (₹)**.
- Reserve a table using a validated booking form.
- View restaurant location and contact details.
- Access placeholder pages for Online Ordering and Login.

## Features

- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop.
- **Booking System**: Controlled React form with state management and client-side validation.
- **Unit Testing**: Tests written with **Vitest** and **React Testing Library**.
- **Modern UI**: Styled with a custom "Dark Green" and "Yellow" theme matching the brand identity.
- **Routing**: Client-side routing using `react-router-dom`.
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility.

## Tech Stack

- **React**: UI Library
- **Vite**: Build Tool
- **Vitest**: Unit Testing
- **React Router**: Navigation
- **CSS3**: Custom Styling with Variables

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akshit6828/coursera-capstone-project.git
   cd capstone-project
   ```

2. **Install requests**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Running Tests

To verify the functionality of the booking form and validation logic, run:

```bash
npm test
```

## Project Structure

- `src/components`: Reusable components (Header, Footer, BookingForm).
- `src/pages`: Page components (HomePage, BookingPage, etc.).
- `src/api.js`: Mock API to simulate booking availability and submission.
- `src/App.css`: Global styles and theming variables.
- `src/tests`: Unit tests and setup configuration.

## License

This project is for educational purposes as part of the Coursera Meta Front-End Capstone.
