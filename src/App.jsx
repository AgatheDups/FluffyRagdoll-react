/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Acceuil from './page/Acceuil'
import Entretien from './page/Entretien'
import Alimentation from './page/Alimentation'
import Adoption from './page/Adoption'
import Calcul from './page/Calcul'
import Forum from './page/Forum'
import Connexion from './page/Connexion'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Inscription from './page/Inscription'
import MdpOublier from './page/MdpOublier'



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavBar/>
      <Acceuil/>
      <Footer/> 
    </div>
  },
  {
    path: '/entretien',
    element: <div>
      <NavBar/>
      <Entretien/>
      <Footer/> 
    </div>
  }
  ,
  {
    path: '/alimentation',
    element: <div>
      <NavBar/>
      <Alimentation/>
      <Footer/> 
    </div>
  }
  ,
  {
    path: '/adoption',
    element: <div>
      <NavBar/>
      <Adoption/>
      <Footer/> 
    </div>
  },
  {
    path: '/calcul',
    element: <div>
      <NavBar/>
      <Calcul/>
      <Footer/> 
    </div>
  },
  {
    path: '/forum',
    element: <div>
      <NavBar/>
      <Forum/>
      <Footer/> 
  </div>
  },
  {
    path: '/connexion',
    element: <div>
      <NavBar/>
      <Connexion/>
      <Footer/> 
    </div>
  },
  {
    path: '/inscription',
    element: <div>
      <NavBar/>
      <Inscription/>
      <Footer/> 
    </div>
  },
  {
    path: '/motdepasse-oublier',
    element: <div>
      <NavBar/>
      <MdpOublier/>
      <Footer/> 
    </div>
  }

])

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App;
