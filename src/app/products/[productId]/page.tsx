// Dynamic Metadata
import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return <h1>Product Detail {params.productId}</h1>;
}
