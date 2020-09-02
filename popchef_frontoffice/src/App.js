import React, { useState, useEffect } from 'react';
import ProductTable from "./components/ProductTable";

const App = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => alert(response))

  }, [products])


  const deleteProduct = id => {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => alert(response))
  };


  return (
    <div className="App">
      <p>{JSON.stringify(products)}</p>
      <ProductTable products={products} deleteProduct={deleteProduct} />

    </div>
  );
}

export default App;
