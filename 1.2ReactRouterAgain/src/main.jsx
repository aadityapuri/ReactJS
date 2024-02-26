import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, {GithubInfo} from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element = {<Home />} />
      <Route path='about/' element={<About />} />
      <Route path='contact/' element={<Contact />} />
      <Route loader={GithubInfo} path='github/' element={<Github />} />
      <Route loader={GithubInfo} path='user/' element={<Github />}>
        <Route path=':userid' element={<Github />} />
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
