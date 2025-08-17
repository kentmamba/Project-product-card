import products from "./ProductList";
import BuyButton from "./BuyButton";

function Product({ id }) {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
      <p className="price">₱{product.price}</p>
      
      
      <BuyButton onClick={() => alert(`Buying ${product.name}`)} />
    </div>
  );
}

export default Product;
