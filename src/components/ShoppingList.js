import React, { useState } from "react";
import items from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
            <button className="add">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
