/*
We have used the json-server library to create a fake api for this project. so basically the json file itself is acting as a database. and is being served as an api and to use it we have to make a get request to the api endpoint.(the server is done and run using npm run server the server script in package.json)(for this the changes in the json file also has been done to see that we can see it in the npm package of json-server library)

so to fetch the data from the api we will use the fetch api to make a get request to the api endpoint and get the data and then we will use the useEffect hook to fetch the data when the component mounts and then we will store the data in a state variable and then we will pass the data to the child component as a prop and then we will map through the data and display the data in the child component.
*/

import JobListing from './jobListing';
import PropTypes from 'prop-types';
// import jobs from '../jobs.json';//this is for direct json file
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';

const JobListings = ({isHome = false}) => {
  // if direct json file we would have loaded then this way
  //const JobListings = isHome ?  jobs.slice(0, 3): jobs;//this will return first 3 jobs if home page else all jobs for like jobs page

  const [Jobs, setJobs] = useState([]);//default is the empty array
  const [loading, setLoading] = useState(true);//default is the true(this is to show spinner when the data is being fetched)

  //fetching the data from the api(many ways to fetch data from the api,react suspense,react query,axios,fetch api,also the v19 has use hook also)
  useEffect(() => {
    const fetchJobs = async () =>{
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      //since we are using the json-server library we have to use the _limit query parameter to limit the number of jobs to 3
      //also to remove the cors error we have to add the proxy in the package.json file
      try{

        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      }
      catch(err){
        console.error(err);
      }finally{
        setLoading(false);//always so we do it in finally block
      }
    }
    fetchJobs();
    //cant directly use async await in useEffect so we have to create a function and then call it
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  //this will run when the component mounts it takes a callback function and an array of dependencies(this will run when the component mounts) i.e whenever any dependency changes the callback function will run again so if nothing still we need to put the empty array
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "All Jobs"}
        </h2>
        
          {loading ? (
            <Spinner loading={loading}/>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        
      </div>
    </section>
  );
}
JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;


