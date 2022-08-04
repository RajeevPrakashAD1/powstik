import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { FieldContainer } from './InputField.styles';
import { Input } from '../../../util/StyledComponent/input'
const InputField = ({ width }) => {
  return (
    <FieldContainer>
      <SearchIcon />
      <Input type="search" width='100%' background='transparent' placeholder='Search for products, services and more' />
    </FieldContainer>
  )
}

export default InputField