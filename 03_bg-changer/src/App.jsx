import { useState } from "react"

function App() {
  function CustomButton({color}){
    let colorName = color.toString().charAt(0).toUpperCase() + color.slice(1);
    return(
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: color}} onClick={()=>setColor(color)}>{colorName}</button>
    )
  }
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen" style = {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shado-lg bg-white px-3 py-2 rounded-3xl">
          <CustomButton color={"red"} />
          <CustomButton color={"green"} />
          <CustomButton color={"blue"} />
          <CustomButton color={"black"} />
          <CustomButton color={"purple"} />
        </div>
      </div>
    </div>
  )
}

export default App
