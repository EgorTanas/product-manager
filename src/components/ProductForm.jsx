import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "" || price === "") {
      return;
    }

    onAddProduct({
      title: title,
      price: Number(price)
    });

    setTitle("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Numele produsului"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="number"
        placeholder="Preț"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit">
        Adaugă produs
      </button>
    </form>
  );
}

export default ProductForm;