import { useState } from 'react'
import './App.css'



function App() {

  const [todo, setToDo] = useState("")
  const [todoArr, setToDoArr] = useState([])

  
  function Addtodo() {
    todo.trim() === "" ? console.log("Nope") : setToDoArr([...todoArr, todo]); setToDo(""); 
  }


  function sil(index){
    const newarr = todoArr.filter((item, i) => index != i)
    setToDoArr(newarr)
  }
  
  function edit(index) {
    const newTodo = prompt("Edit text:", todoArr[index]); 
    if (newTodo.trim() !== "") { 
    const uptodoArr = todoArr.map((item, i) => (i === index ? newTodo : item)); 
      setToDoArr(uptodoArr);
    }
  }

  return (
    <section className="bg-gray-200 w-full h-[100vh] pt-[5%]">
      <div className=" bg-white w-[600px] mx-auto  drop-shadow-md	items-center min-h-[50%] pb-2  ">
        <div>
          <h3 className="font-bold text-[2em] text-center">ToDoList</h3>
          <div>
            <input value={todo} onChange={(e) => setToDo(e.target.value)} className="rounded border drop-shadow-md w-[80%] h-[40px] m-[20px]" type="text" />
            <button onClick={Addtodo}  className="bg-green-500 p-2 font-bold rounded text-white">ADD</button>
          </div>
          <div >
            {
              todoArr.map((item, i) => {
                return(
                <div key={i} className='flex mb-4 items-center px-2'>
                  <p className='w-full text-gray-darkest'>{item}</p>
                  <input className='mx-2' type="checkbox" />
                  <button  onClick={() =>{ edit(i)}}  className='p-2 mr-2 border-2 border-black rounded bg-blue-400 text-white' >Edit</button>
                  <button onClick={() =>{ sil(i)}} className='p-2 mr-2 border-2 border-black rounded bg-red-400 text-white'>Remove</button>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
