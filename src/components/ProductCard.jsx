function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      <p>Preț: {product.price} $</p>

      <button onClick={() => onEdit(product)}>
        Editează
      </button>

      <button onClick={() => onDelete(product.id)}>
        Șterge
      </button>
    </div>
  );
}

export default ProductCard;