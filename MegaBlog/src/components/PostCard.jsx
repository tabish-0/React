import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  const imagePreview = featuredImage ? appwriteService.getFilePreview(featuredImage) : 'default_image_url.jpg'

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full rounded-lg p-6 bg-green-100 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        <div className='w-full justify-center mb-4'>
          <img src={imagePreview} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
