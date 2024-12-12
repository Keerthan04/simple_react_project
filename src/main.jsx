
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom/client';
import JobsPage from './pages/JobsPage';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  //this is the latest of how to use the react-router
  //to understand more refer this
  // https://reactrouter.com/7.0.2/start/library/routing
);
