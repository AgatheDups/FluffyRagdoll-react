/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Care from './page/Care'
import Food from './page/Food'
import Adoption from './page/Adoption'
import WeightCalculator from './page/WeightCalculator'
import Forum from './page/Forum'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'
import LostPassword from './page/LostPassword'
import NotFound from './page/NotFound'
import ScrollToTop from './hooks/ScrollToTop'
import Contact from './page/Contact'

export const apiHost = "http://localhost:8000";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavBar/>
      <Home/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/care',
    element: <div>
      <NavBar/>
      <Care/>
      <ScrollToTop/>
    </div>
  }
  ,
  {
    path: '/food',
    element: <div>
      <NavBar/>
      <Food/>
      <ScrollToTop/>
    </div>
  }
  ,
  {
    path: '/adoption',
    element: <div>
      <NavBar/>
      <Adoption/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/calculator',
    element: <div>
      <NavBar/>
      <WeightCalculator/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/forum',
    element: <div>
      <NavBar/>
      <Forum/>
      <ScrollToTop/>
  </div>
  },
  {
    path: '/signin',
    element: <div>
      <NavBar/>
      <SignIn/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/register',
    element: <div>
      <NavBar/>
      <SignUp/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/forgotten-password',
    element: <div>
      <NavBar/>
      <LostPassword/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/contact',
    element: <div>
      <NavBar/>
      <Contact/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '*',
    element: <div>
      <NavBar/>
      <NotFound />
      <ScrollToTop/>
    </div>
  }

])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>)
}

export default App;