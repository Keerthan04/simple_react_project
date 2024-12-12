//so to have the layout common to all pages we have this and also this will be added in route in app.jsx and also all routes under that will have this as layout

//we will have access to those using the outlet component and then extra to that we can add others which will be common to all pages
import { Outlet } from "react-router"
import {Navbar} from '../components/NavBar'
const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout
