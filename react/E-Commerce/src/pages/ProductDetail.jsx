import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("Product ID from URL:", productId);
  console.log("Products:", products);

  useEffect(() => {
    const fetchedProduct = products.find(
      (product) => product.productId === parseInt(productId)
    );
    console.log("Fetched Product:", fetchedProduct);
    setProduct(fetchedProduct);

    if (fetchedProduct) {
      setSelectedImage(fetchedProduct.image);
    }
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.productId !== product.productId
  );

  return (
    <div className="container mx-auto my-8 max-w-screen-lg px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ProductImages
            image={product.image}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <div className="md:w-1/2">
          <ProductInfo product={product} />
        </div>
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductDetail;
