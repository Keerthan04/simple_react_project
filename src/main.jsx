
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom/client';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, {jobLoader} from './pages/JobPage.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage/>} />
        {/*this is the dynamic route where we can pass the id of the job and then we can use it in the component which we get as params
        
        also we are using the data loader and is passed like this
        */}
        <Route path="*" element={<NotFoundPage />} />{/*this is the 404 page which is basically a component only but we are using it as a route and we use path as * that is to catch all the other routes which are not defined(so we shd have all the routes defined above this first)*/}
      </Route>
    </Routes>
  </BrowserRouter>
  //this is the latest of how to use the react-router
  //to understand more refer this
  // https://reactrouter.com/7.0.2/start/library/routing
);
