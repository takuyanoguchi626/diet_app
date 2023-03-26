import React from 'react'
import { Children } from '../../types/Children'
import Header from '../Header'

export default function Layout(props:Children) {
  return (
    <React.Fragment>
        <Header></Header>
        {props.children}
    </React.Fragment>
  )
}
