import React from 'react'

export default function MovingRibbon({ items = [], reverse = false }) {
  // Duplicate the list of items to ensure smooth infinite loop scroll
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="moving-ribbon">
      <div className={`moving-ribbon-track ${reverse ? 'reverse' : ''}`}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="moving-ribbon-item">
            <span>{item}</span>
            <span className="moving-ribbon-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}
