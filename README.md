# React Router Example App

This project demonstrates basic routing functionality in a React application using `react-router-dom`, built with Vite for a faster development experience. It includes several pages and navigation between them.

## Overview

The application consists of the following pages:

-   **Dashboard (`/`)**: The main landing page.
-   **Login (`/login`)**: A page containing a user registration form and a link back to the dashboard.
-   **News (`/news/:slug/:id`)**: A dynamic page that displays news based on a slug and an ID passed as URL parameters.
-   **Not Found (`*`)**: A fallback page displayed when the requested URL does not match any defined routes.

The application utilizes `BrowserRouter` to enable client-side routing with clean URLs.

## File Structure

The key files in this project are:

-   **`App.tsx`**: Defines the main application component and sets up the routes using the `Routes` and `Route` components from `react-router-dom`.
-   **`WrappedApp.tsx`**: Wraps the `App` component with `BrowserRouter` to enable routing within the application.
-   **`page/Dashboard.tsx`**: (Not provided in the code snippet, but assumed to exist) The component for the dashboard page.
-   **`page/Login.tsx`**: Contains the `Login` component, which includes a `UserRegisterForm` component and a link to the dashboard.
-   **`page/Notfound.tsx`**: (Not provided in the code snippet, but assumed to exist) The component for the "Not Found" page.
-   **`page/News.tsx`**: (Not provided in the code snippet, but assumed to exist) The component for displaying news based on URL parameters.
-   **`components/UserRegisterForm.tsx`**: (Not provided in the code snippet, but assumed to exist) A separate component containing the user registration form.

## Routing Configuration

The `App.tsx` file defines the following routes:

-   `<Route path="/" element={<Dashboard></Dashboard>}></Route>`: Maps the root path (`/`) to the `Dashboard` component.
-   `<Route path="/login" element={<Login></Login>}></Route>`: Maps the `/login` path to the `Login` component.
-   `<Route path="/news/:slug/:id" element={<News></News>}></Route>`: Defines a dynamic route for the news page. `:slug` and `:id` are URL parameters that can be accessed within the `News` component.
-   `<Route path="*" element={<Notfound></Notfound>}></Route>`: This is a catch-all route. If the user navigates to a path that doesn't match any of the above routes, the `Notfound` component will be rendered.

## Setup and Usage

## Setup and Usage (Vite)

To run this application:

1.  **Prerequisites:** Ensure you have Node.js and npm (or yarn, pnpm) installed on your system.
2.  Navigate to your project directory in the terminal.
3.  **Install React:** If you haven't already, create a React project using Vite (this step usually installs React):
    ```bash
    npm create vite@latest my-react-app -- --template react
    cd my-react-app
    # or similar commands based on your project creation
    ```
4.  **Install React Router and other dependencies:**
    ```bash
    npm install react-router-dom
    npm install # Install other project dependencies
    # or
    yarn add react-router-dom
    yarn install # Install other project dependencies
    # or
    pnpm add react-router-dom
    pnpm install # Install other project dependencies
    ```
5.  **Start the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    This command will build your project and serve it at a local development URL (typically `http://localhost:5173/`). Open this URL in your web browser to see the application running.

## Notes

-   The `WrappedApp.tsx` file demonstrates how to wrap the main `App` component with `BrowserRouter`. This is essential for enabling routing functionality in a React application.
-   The comment in `WrappedApp.tsx` mentions that `<HashRouter>` can be used instead of `<BrowserRouter>` for older browsers (like Internet Explorer). `HashRouter` uses the hash portion of the URL for routing (`/#/login`), while `BrowserRouter` uses clean URLs (`/login`).
-   The `Login` component shows how to use the `Link` component from `react-router-dom` to create navigation links between different routes.
-   The `News` component (though not shown) would typically use the `useParams` hook from `react-router-dom` to access the `slug` and `id` parameters from the URL.
