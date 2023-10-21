import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data);
  //   })
  // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    {/* <img src='{data.avatar_url}' alt='Git Pic' width={300} /> */}
    Github Followers: {data.followers}</div>
  )
}

export default Github

export const GithubInfoLoader = async ()=> {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}