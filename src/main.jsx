
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/main.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


    children: [
  
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

