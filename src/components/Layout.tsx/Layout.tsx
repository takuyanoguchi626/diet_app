import React from 'react'
import { Children } from '../../types/Children'
import Header from '../header/Header'
import Navi_bottom from "../navi/Navi_bottom"

export default function Layout(props:Children) {
  return (
    <React.Fragment>
        <Header></Header>
        {props.children}
        <Navi_bottom></Navi_bottom>
    </React.Fragment>
  )
}
