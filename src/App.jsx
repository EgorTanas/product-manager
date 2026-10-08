import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";

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
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Preț: {product.price} $</p>
        </div>
      ))}
    </div>
  );
}

export default App;