import { useEffect, useState } from "react";
import { getProducts, createProduct } from "./services/productService";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  async function handleAddProduct(product) {
  const newProduct = await createProduct(product);

  setProducts([...products, newProduct]);
  } 

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data.products);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <h2>Lista produselor</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;