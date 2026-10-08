function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Preț: {product.price} $</p>
    </div>
  );
}

export default ProductCard;