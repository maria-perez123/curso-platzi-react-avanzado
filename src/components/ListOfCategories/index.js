import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)
  useEffect(function () {
    fetch('')
  })
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
