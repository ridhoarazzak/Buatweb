import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [bookings, setBookings] = useState([])
  const [user, setUser] = useState(null)

  const addBooking = (roomId, dates) => {
    const newBooking = {
      id: Date.now(),
      roomId,
      dates,
      timestamp: new Date()
    }
    setBookings(prev => [...prev, newBooking])
  }

  const value = {
    bookings,
    user,
    setUser,
    addBooking
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
