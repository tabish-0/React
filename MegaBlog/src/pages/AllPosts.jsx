import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents)
            } else {
                console.error("No posts found or error in fetching posts.")
            }
        }).catch((error) => {
            console.error("Error fetching posts:", error)
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length === 0 ? (
                        <div className='w-full text-center'>
                            <h2>No posts available</h2>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
