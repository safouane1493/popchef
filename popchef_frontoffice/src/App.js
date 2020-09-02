import React, { useState, useEffect } from 'react';
import ProductTable from "./components/ProductTable";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

const App = () => {
  const [products, setProducts] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: "", description: "", price: "" });


  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => console.log("erreur fetching products"))

  }, [products])

  const addProduct = product => {

    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => console.log("erreur add product"))

  };


  const deleteProduct = id => {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => console.log("erreur delete"))
  };

  const editProduct = product => {
    setEditing(true);
    setCurrentProduct({ id: product.id, name: product.name, description: product.description, price: product.price });
  };

  const updateProduct = (id, updateProduct) => {
    setEditing(false);
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateProduct)
    })
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(response => console.log("erreur update"))
  };


  return (
    <div className="App">
      {editing ? (
        <div>
          <h2>Modifier Produit</h2>
          <EditProduct
            editing={editing}
            setEditing={setEditing}
            currentProduct={currentProduct}
            updateProduct={updateProduct}
          />
        </div>
      ) : (
          <div>
            <h2>Ajouter produit</h2>
            <AddProduct addProduct={addProduct} />
          </div>
        )}

      <ProductTable products={products} editProduct={editProduct} deleteProduct={deleteProduct} />

    </div>
  );
}

export default App;
