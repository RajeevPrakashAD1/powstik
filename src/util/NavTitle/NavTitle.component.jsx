import React from 'react'
import NavChild from '../components/NavChild/NavChild.component'

import { NavTitleContainer } from './NavTitle.styles'
const NavTitle = ({ items }) => {
  return (
    <NavTitleContainer>
      {
        items.map(item => <NavChild key={item.categoryId} data={item.data} name={item.categoryName} />)
      }
    </NavTitleContainer>
  )
}

export default NavTitle