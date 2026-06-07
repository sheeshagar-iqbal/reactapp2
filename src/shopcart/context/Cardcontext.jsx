import React from 'react'

import { createContext ,useContext,useState } from 'react'
import { AddtoCard } from '../page/AddtoCard'
const CardContext= createContext()
const cardcontext = ({children}) => {
    const [card ,setCard]=useState([])
  return (
    <>
      <CardContext.Provider value={{card,setCard}}>
        {children}
      </CardContext.Provider>
    </>
  )
}

export default cardcontext