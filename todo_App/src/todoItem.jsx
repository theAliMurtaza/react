function todoItem({task , toggleTask , deleteTask}){
    return(
        <li key={task.id} className={`flex items-center justify-between mb-2 p-2 rounded-md ${task.completed ? 'bg-green-300' : 'bg-white'}`}>
          <span onClick={() => toggleTask(task.id)} className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)} className='bg-red-500 text-white rounded-md p-1'>Delete</button>
        </li>
    )
}
export default todoItem;