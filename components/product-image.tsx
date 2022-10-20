import styled from 'styled-components'

export const ProductImage = styled.img.attrs<{ src: string }>(({ src }) => ({
  src: `https://cdn.s-cloud.fi/v1/h1024/w1024/product/ean/${src}_kuva1.jpg`,
}))({
  width: '64px',
  height: '64px',
})
