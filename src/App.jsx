import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "./services/productService";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data.products);
    }

    loadProducts();
  }, []);

  async function handleAddProduct(product) {
    const newProduct = await createProduct(product);

    setProducts([...products, newProduct]);
  }

  async function handleEditProduct(product) {
    const newTitle = prompt("Introdu noul nume:", product.title);
    const newPrice = prompt("Introdu noul preț:", product.price);

    if (!newTitle || !newPrice) {
      return;
    }

    const updatedProduct = await updateProduct(product.id, {
      title: newTitle,
      price: Number(newPrice)
    });

    setProducts(
      products.map((item) =>
        item.id === product.id
          ? updatedProduct
          : item
      )
    );
  }

  async function handleDeleteProduct(id) {
    await deleteProduct(id);

    setProducts(
      products.filter((product) => product.id !== id)
    );
  }

  return (
    <div>
      <h1>Product Manager</h1>

      <ProductForm onAddProduct={handleAddProduct} />

      <h2>Lista produselor</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      ))}
    </div>
  );
}

export default App;