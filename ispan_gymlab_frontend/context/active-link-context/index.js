import React, { useState, createContext, useContext } from 'react'

const ActiveLinkContext = createContext()

export function useActiveLink() {
  return useContext(ActiveLinkContext)
}

export default function ActiveLinkProvider({ children }) {
  const [activeLink, setActiveLink] = useState('')

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  )
}
