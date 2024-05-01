import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <div>
      <h3>Product Lis</h3>
      <h4>
        <Link href="products/1">Product 1</Link>
      </h4>
      <h4>
        <Link href="products/2">Product 2</Link>
      </h4>
      <h4>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h4>
      <h4>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h4>
    </div>
  );
}
