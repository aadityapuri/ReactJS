import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = "Aadi";
  return(
    <div>
      <h1>Custom App !! || {username}</h1>
    </div>
  )
}

const oneElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click ME!'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // One Way
  // <>
  // <MyApp />
  // <App />
  // </>

  // Second Way
  // oneElement // Not a good way

  // Third Way
  ReactElement
  
)
