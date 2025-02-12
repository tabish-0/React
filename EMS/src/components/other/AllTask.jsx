import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
    const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

        <div className=''>
            {userData.map((item, id) => {
                return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded' key={id}>
                    <h2 className='text-lg font-medium w-1/5'>{item.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{item.taskCounts.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{item.taskCounts.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white'>{item.taskCounts.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{item.taskCounts.failed}</h5>
                </div>
           })}
        </div>

    </div>
  )
}

export default AllTask