import React from 'react'
import Hearder from './Hearder'
import Foorter from './Foorter'

const Layout = ({children}) => {
  return (
    <div>
        <Hearder/>
          <main style={{ minHeight:'80vh' }}>
            {children}
          </main>
        <Foorter/>  
            
    </div>
  )
}

export default Layout