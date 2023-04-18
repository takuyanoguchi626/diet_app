import React from 'react'
import { Header as HeaderProps } from '../../types/Header'
import Header from '../header/Header'
import NaviBottom from "../navi/NaviBottom"

type layout = {
  header: HeaderProps;
  children: React.ReactNode;
}

export default function Layout(props: layout) {
  return (
    <React.Fragment>
      <Header has_back_button={props.header.has_back_button} title={props.header.title}></Header>
      <div className="pt_24 pr_16 pl_16 pb_90 l_layout">
        {props.children}
      </div>
      <NaviBottom></NaviBottom>
    </React.Fragment>
  )
}
