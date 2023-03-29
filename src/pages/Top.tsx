import React from 'react'
import Layout from '../components/Layout.tsx/Layout'

export default function Top() {
  return (
    <Layout>
        <div className='pt_24 pr_16 pl_16 top'>
          <div className='title_18 text_center'>今日のカロリー目安</div>
          <div className='l_flex card'>
            <span className="material-symbols-rounded card_icon">restaurant</span>
            <div className='ml_12 card_text'>食事の目安</div>
            <div className='ml_at card_text'>3000kcal</div>
          </div>
          <div className='title_18 text_center'>今日のカロリー計画</div>
        </div>
    </Layout>
  )
}
