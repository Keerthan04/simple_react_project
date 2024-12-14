# React Job Listing Project

![React Job Listing Project](./public/screen.png)

This is a jobs listing project created as part of a Learning React again. It demonstrates how to use React with a mock backend powered by JSON-Server. The project showcases job listings, allowing users to interact with the data via a simple frontend interface.

---

## Features

- **React Frontend:** Built using React and Vite for fast development and performance.
- **Mock Backend:** Utilizes JSON-Server to simulate a backend API.
- **Dynamic Data:** Fetch and display job listings from the mock API.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd react-jobs-project
   ```

2. **Install Dependencies**
   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Run the JSON Server**
   Start the mock backend:

   ```bash
   npm run server

   ```

   The JSON Server will run on [http://localhost:8000](http://localhost:8000).

4. **Run the Vite Frontend**
   Start the React frontend:

   ```bash
   npm run dev
   ```

   The React app will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

### Development Scripts

- **`npm install`**: Installs the project dependencies.
- **`npm run server`**: Runs the JSON-Server backend on port 8000.
- **`npm run dev`**: Starts the React app using Vite on port 3000.

### Build Scripts

- **`npm run build`**: Builds the React app for production.
- **`npm run preview`**: Serves the production build locally for preview purposes.

---

## Building for Production

To build the project for production, use:

```bash
npm run build
```

The optimized output will be available in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
react-jobs-project/
├── public/          # Static assets
├── src/
│   ├── assets/
│   ├── layout/
│   ├── components/  # React components
│   ├── pages/       # App pages
│   ├── App.jsx      # Main app component
│   ├── main.jsx    # Entry point
├── jobs.json          # Mock data for JSON-Server
├── package.json     # Project metadata and dependencies
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```

---

## Improvements thoughts

Make a backend api with express and any db service then also containerize the app using docker and then try to deploy it.

---

## Acknowledgments

This project is inspired by a YouTube crash course on React development. Special thanks to the content creator for providing a clear and engaging tutorial!
