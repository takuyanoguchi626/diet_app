import React from 'react'
import { Header as HeaderProps } from '../../types/Header'
import Header from '../header/Header'
import NaviBottom from "../navi/NaviBottom"

type layout = {
  header: HeaderProps;
  children: JSX.Element;
}

export default function Layout(props: layout) {
  return (
    <React.Fragment>
      <Header has_back_button={props.header.has_back_button} title={props.header.title}></Header>
      {props.children}
      <NaviBottom></NaviBottom>
    </React.Fragment>
  )
}
