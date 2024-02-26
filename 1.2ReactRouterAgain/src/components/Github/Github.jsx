import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {
  const {userid} = useParams();
  console.log(userid==undefined);
  const [data, setData] = useState({});
  

  if(userid==undefined){
    useEffect(()=>{
      fetch(`https://api.github.com/users/aadityapuri`)
      .then((res)=>res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
    },[])
  }
  else{
    useEffect(()=>{
      fetch(`https://api.github.com/users/${userid}`)
      .then((res)=>res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
    },[])
  }


  return (
    <div className='text-center m-4 py-5 bg-slate-500 text-white text-3xl'>
    Github Followers: {data.followers}
    <img className='px-4' width={300} src={data.avatar_url} alt='Github image url' />
    </div>
  )
}

export default Github

export const GithubInfo = async()=>{
  const res = await fetch('https://api.github.com/users/aadityapuri')
  return res.json();
}