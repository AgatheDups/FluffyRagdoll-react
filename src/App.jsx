/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './page/Home'
import Care from './page/Care'
import Food from './page/Food'
import Adoption from './page/Adoption'
import WeightCaculator from './page/WeightCaculator'
import Forum from './page/Forum'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'
import LostPassword from './page/LostPassword'
import Registration from './page/Registration'
import NotFound from './page/NotFound'
import ScrollToTop from './hooks/ScrollToTop'
import Contact from './page/Contact'



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
    path: '/entretien',
    element: <div>
      <NavBar/>
      <Care/>
      <ScrollToTop/>
    </div>
  }
  ,
  {
    path: '/alimentation',
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
    path: '/calcul',
    element: <div>
      <NavBar/>
      <WeightCaculator/>
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
    path: '/connexion',
    element: <div>
      <NavBar/>
      <SignIn/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/inscription',
    element: <div>
      <NavBar/>
      <SignUp/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/motdepasse-oublier',
    element: <div>
      <NavBar/>
      <LostPassword/>
      <ScrollToTop/>
    </div>
  },
  {
    path: '/inscription-page2',
    element: <div>
      <NavBar/>
      <Registration/>
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