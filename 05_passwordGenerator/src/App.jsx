import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  const passRef = useRef(null);

  const passGen= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "`~!@#$%^&*()_-+={}[]|\;'\"<>?/";

    for(let i=0; i < length; i++){
      let ran = Math.floor(Math.random()*str.length);
      pass += str.charAt(ran);
    }
    setPass(pass);
  }, [length, num, char, setPass]);

  useEffect(()=>{
    passGen()
  },[length, num, char, passGen]);

  const copyPassToClip = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassToClip}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-canter gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        
        <div className='flex items-canter gap-x-1'>
        <input type='checkbox' defaultChecked={num} onChange={()=>{setNum((prev)=>!prev)}} />
          <label>Numbers</label>
        </div>
        
        <div className='flex items-canter gap-x-1'>
        <input type='checkbox' defaultChecked={char} onChange={()=>{setChar((prev)=>!prev)}} />
          <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App