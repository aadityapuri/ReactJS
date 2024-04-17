import React from 'react'

function Logo({width = "25%"}) {
  return (
    <img src='https://avatars.githubusercontent.com/u/25003669?s=280&v=4' style={{width}} alt='Logo' className='h-50 max-w-full rounded-full' />
  )
}

export default Logo