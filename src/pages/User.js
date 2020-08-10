import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <>
    <h1>user</h1>
    <SubmitButton onClick={removeAuth}>cerrar sesion </SubmitButton>
  </>
}
