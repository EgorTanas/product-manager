function ProductCard({ product, onEdit }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Preț: {product.price} $</p>

      <button onClick={() => onEdit(product)}>
        Editează
      </button>
    </div>
  );
}

export default ProductCard;