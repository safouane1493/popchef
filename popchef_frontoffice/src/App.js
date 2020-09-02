import React, { useState, useEffect } from 'react';

const App = () => {

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(response => response.json())
      .then(response => setProducts(response))

  }, [])
  const [products, setProducts] = useState(undefined);


  return (
    <div className="App">
      <p>{JSON.stringify(products)}</p>
    </div>
  );
}

export default App;
