import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuHeader from '../header/MenuHeader'
import Footer from './Footer'

function PageLayout() {
  return (
    <>
        <MenuHeader/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default PageLayout