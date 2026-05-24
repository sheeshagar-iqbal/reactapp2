import React, { useCallback, useEffect, useState ,useRef } from 'react'

function PasswordGenerator() {
    const [length ,setLength]= useState(8)
    const [allowNumber,setAllowNumber]= useState(false)
    const [allowCharacter,setAllowCharacter]= useState(false)
    const [password,setPassword]=useState('')
    let passwordref =useRef(null) 

    const passwordgenrate= useCallback(()=>{
        let pass=''
        let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (allowCharacter) str+='!@#$^&*(){}[]+-_`~?/\|'
        if(allowNumber) str+='0123456789'

        

        for (let i = 1; i <= length; i++) {
            let rand= Math.floor((Math.random()*str.length) +1)
            console.log(rand,str.length);
            
            pass+=str.charAt(rand)
            
        }
        setPassword(pass)

    },[length,allowNumber,allowCharacter,setPassword])


    const  copyPasswordToClipboard=useCallback(()=>{
            passwordref.current?.select()
            password.current?.setSelectionRange(0, 5)
            window.navigator.clipboard.writeText(password)
    },[password])

   useEffect(()=>{
    passwordgenrate()
   },[length,allowCharacter,allowNumber,passwordgenrate])
  return (
    <>
    <div className='text-orange-400 bg-gray-700 w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 my-8 py-4'  >
        <h1 className='text-white'>password generator</h1>

        <div className='flex rounded-lg mb-4 shadow overflow-hidden items-center'>
        <input type="text"
        className='outline-none w-full py-1 px-3 bg-amber-50 my-4 rounded-md '
        value={password}
        placeholder='password'
        readOnly
        ref={passwordref}
         />
         <input type="button" value="copy" onClick={copyPasswordToClipboard}   className='bg-blue-700 outline-0 text-white py-1 px-5 '/>

         </div>

         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                 type="range" 
                 min={6} 
                 max={16} 
                 value={length} 
                 className='cursor-pointer' 
                 onChange={(e)=> {setLength(e.target.value)}}/>
                <label >length:{length}</label>


            </div>

            <div className='flex items-center gap-x-1'>
                <input type="checkbox" defaultChecked={allowNumber} onChange={()=> setAllowNumber((prev)=> !prev)} />
                <label >Number</label>

                <input type="checkbox" defaultChecked={allowCharacter} onChange={()=> setAllowCharacter((prev)=> !prev)} />
                <label >Character</label>

            </div>

         </div>
    </div>
    </>
  )
}

export default PasswordGenerator