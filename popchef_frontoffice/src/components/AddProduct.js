import React, { useState } from "react";

const AddProduct = props => {

    const [product, setProduct] = useState({ name: "", description: "", price: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.addProduct(product);
                setProduct({ name: "", description: "", price: "" });
            }}
        >
            <label>Nom</label>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleInputChange}
            />
            <label>Prix</label>
            <input
                type="text"
                name="price"
                value={product.price}
                onChange={handleInputChange}
            />
            <button>Add new product</button>
        </form>
    );
};

export default AddProduct;
