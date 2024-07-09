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
import Inscription from './page/Inscription'
import MdpOublier from './page/MdpOublier'



const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavBar/>
      <Acceuil/>
    </div>
  },
  {
    path: '/entretien',
    element: <div>
      <NavBar/>
      <Entretien/>
    </div>
  }
  ,
  {
    path: '/alimentation',
    element: <div>
      <NavBar/>
      <Alimentation/>
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
      <Calcul/>
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
      <Connexion/>
    </div>
  },
  {
    path: '/inscription',
    element: <div>
      <NavBar/>
      <Inscription/>
    </div>
  },
  {
    path: '/motdepasse-oublier',
    element: <div>
      <NavBar/>
      <MdpOublier/>
    </div>
  }

])

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App;
