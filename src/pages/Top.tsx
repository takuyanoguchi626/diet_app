import React from 'react'
import Layout from '../components/Layout.tsx/Layout'
import Card_calorie from "../components/card/Card_calorie"
import Card_calorie_table from "../components/card/Card_calorie_table"

export default function Top() {
	return (
		<Layout>
			<div className='pt_24 pr_16 pl_16 pb_90 l_layout'>
				<div className='title_24 text_center'>今日のカロリー目安</div>
				<Card_calorie icon={"restaurant"} title={"食事の目安"} calorie={3000}></Card_calorie>
				<Card_calorie class_name={"mt_24"} icon={"fitness_center"} title={"運動の目安"} calorie={3000}></Card_calorie>
				<div className='title_24 text_center'>今日のカロリー計画</div>
				<div className='l_flex'>
					<p className='title_24'>合計カロリー</p>
					<p className='ml_at title_24'>3000kcal</p>
				</div>
				<div className="title_24 text_center">あさ</div>
				<div className='l_flex'>
					<p className='title_24'>あさのカロリー</p>
					<p className='ml_at title_24'>3000kcal</p>
				</div>
				<Card_calorie_table></Card_calorie_table>
			</div>
		</Layout>
	)
}