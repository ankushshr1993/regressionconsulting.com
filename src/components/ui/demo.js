import React from 'react'
import ResponsiveHeroBanner from './responsive-hero-banner'

const HeroDemo = () => {
  return (
    <ResponsiveHeroBanner
      logoUrl="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80"
      backgroundImageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80"
      badgeLabel="New"
      badgeText="First Commercial Flight to Mars 2026"
      title="Journey Beyond Earth"
      titleLine2="Into the Cosmos"
      description="Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable."
      primaryButtonText="Book Your Journey"
      primaryButtonHref="#"
      secondaryButtonText="Watch Launch"
      secondaryButtonHref="#"
      ctaButtonText="Reserve Seat"
      ctaButtonHref="#"
      partnersTitle="Partnering with leading space agencies worldwide"
    />
  )
}

export default HeroDemo
