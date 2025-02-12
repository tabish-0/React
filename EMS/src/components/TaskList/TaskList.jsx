import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
        {data.tasks.map((item, id) => {
          if(item.active){
            return <AcceptTask key={id} data={item}/>
          }
          if(item.NewTask) {
            return <NewTask key={id} data={item}/>
          }
          if(item.completed) {
            return <CompleteTask key={id} data={item}/>
          }
          if(item.failed) {
            return <FailedTask key={id} data={item}/>
          }
        })}
    </div>
  )
}

export default TaskList