
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom/client';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditJobPage from './pages/EditJobPage.jsx';

//so to pass the data from the child component to the parent component we use the props and then pass the function as a prop to the child component and then call the function in the child component

//add new job
const addJob = async (job) => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch('/api/jobs',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(job),
    });
    return
}

//delete job
const deleteJob = async(id) => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch(`/api/jobs/${id}`,{
        method:'DELETE',
    });
    return
}

// Update Job
  const updateJob = async (job) => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        {/*this is the dynamic route where we can pass the id of the job and then we can use it in the component which we get as params

        also we are using the data loader and is passed like this(not working idk why)
        */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
        {/*this is the 404 page which is basically a component only but we are using it as a route and we use path as * that is to catch all the other routes which are not defined(so we shd have all the routes defined above this first)*/}
      </Route>
    </Routes>
  </BrowserRouter>
  //this is the latest of how to use the react-router
  //to understand more refer this
  // https://reactrouter.com/7.0.2/start/library/routing
);
