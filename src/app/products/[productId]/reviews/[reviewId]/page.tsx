import { notFound } from 'next/navigation'
import React from 'react'

export default function ProductDetail({params} : {params : {productId : string, reviewId : string}}) {
  if(parseInt(params.reviewId) > 100) {
    notFound()
  }
  return (
    <div>Product Detail {params.productId} for review {params.reviewId}</div>
  )
}
