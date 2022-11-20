import * as React from 'react'
import { Helmet } from "react-helmet"

const CartPage = () => {
  return (
    <>
    <Helmet>
      <title>Cart</title>
    </Helmet>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </>
  )
}

export const Head = () => <title>Cart Page</title>

export default CartPage