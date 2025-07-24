import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


function App() {
  const [ password, setPassword ] = useState("")
  const [ length, setLength ] = useState(8)
  const [ numberAllowed, setNumberAllowed ] = useState(false)
  const [ charAllowed, setCharAllowed ] = useState(false)
  const [ copyStatus, setCopyStatus ] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    ()=>{
      let pass=""
      let char
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(charAllowed)
        str += "!@#$%^&*()_+-{}[]|;:,.<>/?"
      if(numberAllowed)
        str += "1234567890"

      for (let i = 1; i <= length; i++) {
        char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char) 
      }
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed, setPassword]
  )

  useEffect(()=>{passwordGenerator()},[length,numberAllowed, charAllowed, passwordGenerator])
  useEffect(()=>{setCopyStatus(false)},[length, numberAllowed, charAllowed, passwordGenerator])
  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();

    // To select given range of text
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password);

    setCopyStatus(true)

    // setTimeout(() => {
    //   setCopyStatus(false)
    // }, 5000);
  }
    ,[password]
)

  return (
    <>
      <div className='w-full h-screen fixed top-0 bg-black'>
        <div className='bg-gray-800 pt-4 p-4 mt-20 w-lg mx-auto rounded-xl'>
          <h1 className='text-white text-2xl text-center'>Password Generator</h1>
          
          <div className='flex overflow-hidden m-8 rounded-2xl mt-6'>
            <input 
              type="text" 
              placeholder='Auto Generated Password '
              value={password}
              readOnly
              className='outline-none overflow-auto bg-gray-400 w-full px-3 py-1 text-lg'
              ref={passwordRef}
            />
            <button 
              // className='outline-none bg-blue-600 text-white shrink-0 px-4 text-xl text-center'
              className={`outline-none text-white shrink-0 px-4 text-xl text-center ${copyStatus ? 'bg-emerald-600' : 'bg-indigo-600'}`}
              onClick={ copyPasswordToClipboard }
              // style={{ backgroundColor: copyStatus ? "darkblue" : "blue"}}
            >
              {(copyStatus) ? "Copied" : "Copy"}

            </button>
          </div>

          <div className='flex flex-nowrap mt-4 justify-around'>
            <div className='flex flex-nowrap gap-1'>
              <input 
                type="range" 
                className='cursor-pointer'
                max={100}
                min={8}
                value={length}
                id='rangeLen'
                onChange={(e)=> setLength(e.target.value)}
              />
              <label htmlFor="rangeLen" className='text-white'>length: {length}</label>
              </div>

              <div className='flex gap-1'>
                <input type="checkbox" id='numberInput' defaultValue={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
                <label htmlFor="numberInput" className='text-white'>Number</label>
              </div>

              <div className='flex gap-1'>
                <input type="checkbox" id='charInput' defaultValuealue={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
                <label htmlFor="charInput" className='text-white'>Special Characters</label>
              </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
