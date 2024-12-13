
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useParams, useNavigate } from "react-router";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import {Link} from "react-router-dom"
import Spinner from "../components/Spinner";
import {toast} from 'react-toastify';

const JobPage = ({deleteJob}) => {
  const { id } = useParams(); //since we are using the react router dom we can use the useParams hook to get the id of the job from the url

  const [job, setjob] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJob = async () => {
      //this is the function to fetch the data from the api
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setjob(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //this is the normal way of fetching the data from the api

  //if the data loader to be used from the react router dom then we can use the useLoaderData hook(not working idk why)
  // const job = loaderData;//this is the data which we get from the data loader
  // console.log(job);
  //old version we can do by using the useLoaderData hook now we can use the loaderData directly

  const navigate = useNavigate();
  //to delete the job we can use the delete function and then pass the id of the job and then call the function in the child component

  const onDeleteClick = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) {
      return;
    }
    deleteJob(id);
    //show toast message then redirect
    toast.success("Job Deleted Successfully");
    return navigate("/jobs");
  };
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div className="text-gray-500 mb-4">{job.type}</div>
                    <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                    <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                      <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1" />
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-indigo-800 text-lg font-bold mb-6">
                      Job Description
                    </h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="text-indigo-800 text-lg font-bold mb-2">
                      Salary
                    </h3>

                    <p className="mb-4">{job.salary} / Year</p>
                  </div>
                </main>

                <aside>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                    <h2 className="text-2xl">{job.company.name}</h2>

                    <p className="my-2">{job.company.description}</p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                      {job.company.contactEmail}
                    </p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="my-2 bg-indigo-100 p-2 font-bold">
                      {job.company.contactPhone}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                    <Link
                      to={`/edit-job/${job.id}`}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                      Edit Job
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                      onClick={() => onDeleteClick(job.id)}
                    >
                      Delete Job
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
JobPage.propTypes = {
  deleteJob: PropTypes.func.isRequired,
};

{/* //to load we are using the data loaders from react router dom
// eslint-disable-next-line react-refresh/only-export-components */}
{/* export const jobLoader = async({params}) =>{
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    console.log(data);
    return data;
} */}
{/* the job loader is not working even though saw from the documentation so skipping to normal useEffect hook */}
export default JobPage;
{/* export default  JobPage //so since both export we do like this */}
