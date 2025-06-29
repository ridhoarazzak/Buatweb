import { useState } from 'react'

export default function LodgingCard({ room }) {
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = () => {
    setIsBooked(true)
    setTimeout(() => setIsBooked(false), 2000)
  }

  return (
    <div className="room-card fade-in-up">
      <div className="room-image">
        <span className="coffee-float">{room.icon}</span>
      </div>
      <div className="room-content">
        <h3>{room.name}</h3>
        <p>{room.description}</p>
        <ul className="room-features">
          {room.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="room-price">{room.price}</div>
        <button 
          className="book-button" 
          onClick={handleBooking}
          disabled={isBooked}
        >
          {isBooked ? '✓ Booked!' : 'Book Now'}
        </button>
      </div>
    </div>
  )
}
