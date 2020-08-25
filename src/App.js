import React from "react";
import TableProducts from "./component/TableProducts";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const Products = [
    { name: "Iphone 11", category: "Electronic", price: 1100 },
    { name: "T-shirt Juventus", category: "Clothes", price: 110 },
    { name: "Dell PC Gamer", category: "Electronic", price: 2500 },
  ];

  const renderProduct = (Product, index) => {
    return (
      <tr key={index}>
        <td>{Product.name}</td>
        <td>{Product.category}</td>
        <td>{Product.price}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <h1>Table Products</h1>
      <ReactBootStrap.Table striped bordered hover>
        <TableProducts Products={Products} />
      </ReactBootStrap.Table>
    </div>
  );
};

export default App;
