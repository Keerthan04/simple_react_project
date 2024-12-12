
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router';
const JobListing = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);//to manage the showing of read more and read less(this is component level state)
  
  let description = job.description;
  if(!showFullDescription){
    description = description.substring(0, 80)+ '...';
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button className='text-indigo-500 mb-5 hover:text-indigo-600 ' onClick={()=>setShowFullDescription((prevState) => !prevState)}>
          {showFullDescription ? 'less' : 'More'}
        </button>{/*toggle the showFullDescription state(and always we do it with a function and the setState we can pass it a function where we will have access to the previous state and then do things accordingly) */}

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className='inline text-lg mb-1 mr-1'/>
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
JobListing.propTypes = {
  job: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default JobListing;
