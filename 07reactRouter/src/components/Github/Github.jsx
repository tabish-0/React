import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/tabish-0') //hiteshchoudhary
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} /> 
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tabish-0')
    return response.json()  // ye ek promise hai phir bhi return kar pa rhe
}