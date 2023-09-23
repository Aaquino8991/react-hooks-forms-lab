import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setItemName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleItemName(event) {
    setItemName(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleItemFormSubmit(e) {
    e.preventDefault()
    const formData = {
      id: uuid(),
      name,
      category,
    }
    onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
