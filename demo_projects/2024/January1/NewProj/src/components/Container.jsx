import React from 'react'

function Container() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
    {isVisible && (
      <div className="bg-white px-4 py-6 rounded-lg shadow-md">
        
        <button onClick={() => setIsVisible(false)}>Close</button>
      </div>
    )}
  </div>
  )
}

export default Container
