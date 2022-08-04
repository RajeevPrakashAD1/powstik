import React from 'react'

import AddProductInput from './addProductBox/addProductBox'
import Footer from '../LandingPage/FooterWhite'
import Header from '../LandingPage/Header/Header.component'

const addProduct = () => {
  return (
    <>
        <Header />
        <AddProductInput />
        <Footer />
    </>
  )
}

export default addProduct