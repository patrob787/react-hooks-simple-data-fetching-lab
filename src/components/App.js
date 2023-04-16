import React, { useState, useEffect } from 'react'

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(data => setImage(data))
  }, []);

  return (
    <div>
        {image ? <img src={image.message} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  )
}

export default App