import { gql, useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import { ProductImage } from '../components/product-image'
import { Product, RemoteStoreDataDocument } from '../types/document-nodes'

const _StorePage: NextPage<{ className?: string }> = ({ className }) => {
  const router = useRouter()
  const storeId = router.query.storeId

  const storeData = useQuery(RemoteStoreDataDocument, {
    variables: {
      id: storeId as string,
    },
  })

  const [cart, setCart] = useState<Product[]>([])

  const onButtonClick = (product: Product) => {
    setCart([...cart, product])
  }

  return (
    <div className={className}>
      <h2>{storeData.data?.store?.name}</h2>

      <div className='product__list'>
        {storeData.data?.store?.products?.items?.map((product) => (
          <article key={product?.id}>
            <div>
              <ProductImage src={product?.ean || ''} />
            </div>
            <h1>{product?.name}</h1>
            <h2>{formatPrice(product)}</h2>

            <button onClick={() => onButtonClick(product as Product)}>add to cart</button>
            {storeData.data?.store?.products?.items?.indexOf(product) !==
            (storeData.data?.store?.products?.items?.length as number) - 1 ? (
              <hr />
            ) : null}
          </article>
        ))}
      </div>
      <div className='cart'>
        <h2>shopping cart</h2>
        {cart.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

const formatPrice = (product?: Partial<Product> | null, options?: { unit?: string }) => {
  const formatted = Number(product?.price).toFixed(2)
  return formatted + ' ' + options?.unit ?? product?.priceUnit
}

const StorePage = styled(_StorePage)({
  display: 'flex',
  flexDirection: 'row',
  padding: '32px',
  ['.product__list']: {
    width: '50%',
  },
  ['.cart']: {
    width: '50%',
  },
})

export default StorePage
