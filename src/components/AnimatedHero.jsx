import { useEffect, useState } from 'react'

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className={`${isVisible ? 'fade-in-up' : ''}`}>
          <h1>
            Welcome to Green Coffee 
            <span className="coffee-float" style={{ display: 'inline-block', marginLeft: '10px' }}>☕</span>
          </h1>
          <p>
            Experience the ultimate coffee lover's retreat. Each room is a unique journey 
            through the rich world of premium coffee culture.
          </p>
          <a href="#rooms" className="cta-button">
            Explore Our Rooms
          </a>
        </div>
      </div>
      
      {/* Floating Coffee Beans */}
      <div className="coffee-bean" style={{ top: '20%', left: '10%' }}></div>
      <div className="coffee-bean" style={{ top: '60%', right: '15%' }}></div>
      <div className="coffee-bean" style={{ top: '40%', left: '80%' }}></div>
      <div className="coffee-bean" style={{ top: '80%', left: '20%' }}></div>
    </section>
  )
}
