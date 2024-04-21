import React from 'react'

export default function ProductDetail({params} : {params : {productId : string, reviewId : string}}) {
  return (
    <div>Product Detail {params.productId} for review {params.reviewId}</div>
  )
}
