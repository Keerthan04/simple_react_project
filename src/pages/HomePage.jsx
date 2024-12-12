//for every page we dont need the navbar component so that will be taken care using the layout component and here only for each page what is needed that we will do


import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage
