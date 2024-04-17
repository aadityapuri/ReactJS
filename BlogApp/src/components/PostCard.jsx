import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import service from '../appwrite/config'

function PostCard({
  $id,
  title,
  featuredImage
}) 
{
  
  const [href,setHref] = useState('')
  
  useEffect(()=>{
    service.getPreviewImage(featuredImage).then((href)=> setHref(href));
    console.log("Got image href!!")
  },[])

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full justify-center mb-4'>
        <img src={href} alt={title} className='rounded-xl' />
      </div>
      <h2 className='text-xl font-bold' >{title}</h2>
    </Link>
  )
}

export default PostCard