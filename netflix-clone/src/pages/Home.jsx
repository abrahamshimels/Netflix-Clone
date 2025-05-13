import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import RowList from '../components/Rows/RowLIst/RowList'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>    
    </>
  )
}
