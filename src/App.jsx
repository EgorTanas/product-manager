import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

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