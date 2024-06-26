import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import Container  from '../components/container/Container'
import PostCard from '../components/PostCard'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    service.getActivePosts([]).then((posts)=>{
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])
  
  if(posts.length === 0){
    return (
      <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          <h1>Login to read posts</h1>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts && (
            posts.map((post)=>(
              <div className='p-2 w-1/4' key={post.$id}>
              <PostCard {...post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  )
}

export default Home