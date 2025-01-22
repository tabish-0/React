import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  const imagePreview = featuredImage ? appwriteService.getFilePreview(featuredImage) : 'default_image_url.jpg'

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full rounded-xl p-4 bg-gray-100'>
        <div className='w-full justify-center mb-4'>
          <img src={imagePreview} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
