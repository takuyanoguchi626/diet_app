import React from 'react'
import Layout from "../components/Layout.tsx/Layout"

const Mypage = () => {
    return (
        <Layout header={{ has_back_button: false, title: "マイページ" }}>
            <div className='pt_24 pr_16 pl_16 pb_90 l_layout'>
                mypage
            </div>
        </Layout>)
}

export default Mypage