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



// import {Route,createBrowserRouter,RouterProvider} from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import MainLayout from './layout/MainLayout';
import { Outlet } from 'react-router';
import Navbar from './components/NavBar';
//to use the toastify we have to import the toast container and also the css file and it goes into the layout component(so here we have it as app)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  //older version 2
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: '/', element: <MainLayout />,
  //       children: [
  //         { index: true, element: <HomePage /> }
  //       ]
  //     }
  //   ]

  // older version 1
    // <Route path = '/' element = {<MainLayout/>}>
    //   <Route index element={<HomePage/>} />
    // </Route>//this is the layout and then we have the home page
  // );
  //so using this and if normal home route (/) then we use index else we define the route using the path attribute and then we use the route component and then we pass the element and then we will use the RouterProvider and then we will pass the router to it


  return (
    //(older version setup) <RouterProvider route = {router}></RouterProvider>
    <>
      <Navbar/>
      <Outlet/>
      <ToastContainer position="top-center" autoClose={3000}  />
    </>
  );
}


//so to have the layout common to all pages we have this and also this will be added in route in main.jsx and also all routes under that will have this as layout(and if route is index then direct default children type else other path then to route+path will be taken)

//we will have access to those using the outlet component and then extra to that we can add others which will be common to all pages

//to add multiple pages we need to use react-router-dom package


export default App
