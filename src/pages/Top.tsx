import React from 'react'
import Layout from '../components/Layout.tsx/Layout'

export default function Top() {
  return (
    <Layout>
        <div>
          <div className='title_16'>今日のカロリー目安</div>
          <div className='l_flex'>
          <span className="material-symbols-rounded">restaurant</span>
            <div>食事の目安</div>
            <div>3000kcal</div>
          </div>
          <div className='title_16'>今日のカロリー目安</div>
        </div>
    </Layout>
  )
}
