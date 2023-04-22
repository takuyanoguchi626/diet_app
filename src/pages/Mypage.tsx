import React from 'react'
import Layout from "../components/Layout.tsx/Layout"

const Mypage = () => {
    return (
        <Layout header={{ has_back_button: false, title: "マイページ" }}>
            mypage
        </Layout>)
}

export default Mypage