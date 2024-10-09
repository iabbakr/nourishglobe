import React from 'react'

export default function Main() {
  return (
    <div>
        <section className="intro">
        <div className="container">
            <p>
                The path to a hunger-free world begins with a food system that nurtures both people and the planet.
                At <strong>Nourish Globe</strong>, we believe in a future where food security isn’t just a hope but a reality. 
                From the fields where produce is grown to the plates they’re served on, we’re transforming every step of the food system 
                to ensure no one is left behind. By bridging the gap between sustainable agriculture, capacity-building, and innovative 
                food processing, we work across the entire food chain to ensure that the food we cultivate feeds people without depleting 
                the resources our future depends on. We are addressing food insecurity at its roots.
            </p>
        </div>
        </section>

        <section className="cta-buttons">
        <div className="container">
            <button id="learnMoreBtn" className="cta-button">Learn More</button>
            <button id="projectsBtn" className="cta-button">Our Projects</button>
            <button id="getInvolvedBtn" className="cta-button">Get Involved</button>
        </div>
        </section>
      
    </div>
  )
}
