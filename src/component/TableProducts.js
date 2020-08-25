import React from "react";

const TableProducts = (props) => {
  console.log(props);
  return (
    <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.Products.map((product) => (
          <tr>
            <td> {product.name} </td>
            <td> {product.category}</td>
            <td> {product.price}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default TableProducts;
