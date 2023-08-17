import FrontDisplay from '@/components/FrontDisplay'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <div>
        <Navbar/>
        <FrontDisplay/>
      </div>
    </>
  )
}

export default page
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=47fe6ad73719dd4d22b793fb6cf13673