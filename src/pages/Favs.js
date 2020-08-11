import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='tus favoritos' subtitle='aqui puedes encontra tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
