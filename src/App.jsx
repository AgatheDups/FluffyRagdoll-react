/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Care from './page/Care'
import Food from './page/Food'
import Adoption from './page/Adoption'
import WeightCaculator from './page/WeightCaculator'
import Forum from './page/Forum'
import SignIn from './page/SignIn'
import NavBar from './components/NavBar'
import SignUp from './page/SignUp'
import LostPassword from './page/LostPassword'



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavBar/>
      <Home/>
    </div>
  },
  {
    path: '/entretien',
    element: <div>
      <NavBar/>
      <Care/>
    </div>
  }
  ,
  {
    path: '/alimentation',
    element: <div>
      <NavBar/>
      <Food/>
    </div>
  }
  ,
  {
    path: '/adoption',
    element: <div>
      <NavBar/>
      <Adoption/>
    </div>
  },
  {
    path: '/calcul',
    element: <div>
      <NavBar/>
      <WeightCaculator/>
    </div>
  },
  {
    path: '/forum',
    element: <div>
      <NavBar/>
      <Forum/>
  </div>
  },
  {
    path: '/connexion',
    element: <div>
      <NavBar/>
      <SignIn/>
    </div>
  },
  {
    path: '/inscription',
    element: <div>
      <NavBar/>
      <SignUp/>
    </div>
  },
  {
    path: '/motdepasse-oublier',
    element: <div>
      <NavBar/>
      <LostPassword/>
    </div>
  }

])

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App;