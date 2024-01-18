import { useState } from 'react'


function App() {
  const[color,setColor]= useState("gray")
    
  

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen w-full px-6 text-white  '
    style={{backgroundColor:color}} > 
      <div className=' text-xl font-bold md:text-7xl font-Pacifico px-3 rounded-lg'>BACKGROUND CHANGER</div>
      <div className=' md:w-full  flex md:flex-row flex-col font-bold max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 bg-[#121212] gap-4'>
      <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600' onClick={()=> setColor("red")}>red</button>
      <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-600' onClick={()=> setColor("green")}>green</button>
      <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-600' onClick={()=> setColor("blue")}>blue</button>
      <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-purple-600' onClick={()=> setColor("purple")}>purple</button>
      <button className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-600' onClick={()=> setColor("yellow")}>yellow</button>
      </div>
     </div>  
    </>
  )
}

export default App
