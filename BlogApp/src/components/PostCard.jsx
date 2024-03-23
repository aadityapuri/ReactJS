import React from 'react'
import {Link} from 'react-router-dom'
import Service from '../appwrite/config'

function PostCard({
  $id,
  title,
  featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div>
        <img src={Service.getPreviewImage(featuredImage)} alt='Preview Image' className='rounded-xl' />
        <h2 className='text-xl font-bold' >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard