import React from 'react'

export default function DocsPage({params} : {params : {
  slug : string[]
}}) {

  if(params.slug?.length === 1) {
    return <div>
      Ini adalah paramater ke-1 {params.slug[0]}
    </div>
  }

  return (
    <div>Docs page</div>
  )
}
