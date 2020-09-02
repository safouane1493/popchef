import React from "react";


const ProductTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {(props.products == null) ? null : props.products.length > 0 ? (
                props.products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.username}</td>
                        <td>
                            <button
                                className="button muted-button"
                            >
                                Edit
              </button>
                            <button
                                className="button muted-button"
                                onClick={() => props.deleteProduct(product.id)}
                            >
                                Delete
              </button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No products</td>
                    </tr>
                )}
        </tbody>
    </table>
);

export default ProductTable;
