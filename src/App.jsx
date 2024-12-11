//basic jsx usage

// import React from 'react'

// const App = () => {
//   const name = 'John Doe';
//   const names = ['a', 'b', 'c'];
//   const loggedIn = true;
//   const styles = {
//     color: 'red',
//     fontSize: '20px'
//   }
//   return (
//     <div>
//       <p style={{color:'red', fontSize:'20px'}}>{/* here inline styles we are using */}Hello {name}</p>
//       <ul style={styles}>{/* styles is an object and pass */}
//         {names.map((name,index)=>(
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
//       {loggedIn && <h1>Hello Member</h1>}{/* if loggedIn is true only then show Hello Member(IMP) */}
//     </div>
//   )
// }

// export default App

import Hero from './components/Hero'
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Become a React Developer"
        subtitle="Find the React job that fits your skill set"
      />
      <HomeCards/>
      <JobListings />
    </>
  );
}

export default App
