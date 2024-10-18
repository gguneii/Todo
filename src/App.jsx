import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [todo, setTodo] = useState("")
  const [todoArr, setTodoArr] = useState([])
  const[isEditing, setIsEditing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  function addTodo(){
    if(todo) {
      if (isEditing) {
        const updatedTodos =[...todoArr]
        updatedTodos[currentIndex].text = todo
        setTodoArr(updatedTodos)
        setIsEditing(false)
        setCurrentIndex(null)
    }
    else{
      setTodoArr([...todoArr, {text:todo, done:false}])
    }
    }   
    setTodo("") 
  }
  function deleteArr(index){
    setTodoArr(todoArr.filter((item,i)=> index != i ));
  }

  function edit(index){
    setTodo(todoArr[index])
    setIsEditing(true)
    setCurrentIndex(index)
}
  function done(index){
    const updatedTodos = [...todoArr]
    updatedTodos[index].done = !updatedTodos[index].done
    setTodoArr(updatedTodos)
}
  return (
    <>
    <div className="min-h-screen bg-pink-100 flex items-center justify-center py-10">
  <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
    <h2 className="text-2xl font-bold text-pink-600 mb-6">To-Do List</h2>
  
    <div className="flex mb-4">
      <input value={todo} onChange={(e) => setTodo(e.target.value.trim())}
        type="text"
        placeholder="Add a new task"
        className="flex-grow px-4 py-2 border border-pink-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button onClick={addTodo} className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
      {isEditing ? "Update" : "Add"}
      </button>
    </div>
    
    <ul className="space-y-2">
      {
        todoArr.map((item,index) => {
          return(
            <li key={index} className="flex justify-between items-center bg-pink-50 p-4 rounded-md">
             <div className="flex items-center space-x-3">
              <input onClick={()=> done(index)} type="checkbox" checked={item.done} onChange={() => {}}  className='w-5 h-5 accent-pink-500 border border-pink-300 rounded-md checked:bg-pink-500 checked:border-transparent' />
              <span className={item.done ? 'line-through' : ''}>{item.text}</span>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => edit(index)} className="text-pink-500 px-2 hover:text-pink-700">
                <i className="fa-solid fa-pen"></i>
              </button>
              <button onClick={() =>{
                deleteArr(index)
              }} className="text-pink-500 hover:text-pink-700">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
         </li>
          )
        })
      }
    </ul>
  </div>
</div>

    </>
  )
}

export default App