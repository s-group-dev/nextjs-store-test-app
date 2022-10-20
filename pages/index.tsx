import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { RemoteStoresDocument } from '../types/document-nodes'

const StoreListItem = styled.div({
  padding: '8px 0',
})

const _Home: NextPage<{ className?: string }> = ({ className }) => {
  const list = useQuery(RemoteStoresDocument)

  if (list.loading) {
    return <div>Loading....</div>
  }

  return (
    <div className={className}>
      {list.data?.stores?.map((store) => (
        <StoreListItem key={store.id}>
          <Link href={`/${store.id}`}>
            <a>{store.name}</a>
          </Link>
        </StoreListItem>
      ))}
    </div>
  )
}

const Home = styled(_Home)({
  padding: '32px',
  [`${StoreListItem} + ${StoreListItem}`]: {
    borderTop: '1px solid #ddd',
  },
})

export default Home
