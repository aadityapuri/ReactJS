import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/aadityapuri')
    .then((res)=>res.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  },[])

  return (
    <div className='text-center'>Github</div>
  )
}

export default Github