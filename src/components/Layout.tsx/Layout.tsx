import React from 'react'
import { Children } from '../../types/Children'
import Header from '../header/Header'
import NaviBottom from "../navi/NaviBottom"

export default function Layout(props: Children) {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
      <NaviBottom></NaviBottom>
    </React.Fragment>
  )
}
