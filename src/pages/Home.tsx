import React from 'react'
import Layout from '../components/Layout.tsx/Layout'
import CardCalorie from "../components/card/CardCalorie"
import CardFoodAmount from "../components/card/CardFoodAmount"
import { FoodAmount } from "../types/Card"

export default function Home() {

	const foodAmountArr: FoodAmount[] = [
		{
			amount: 1,
			icon_url: "rice.svg",
			explanation: "お米お茶碗1杯分",
			calorie: 346
		},
		{
			amount: 1,
			icon_url: "rice.svg",
			explanation: "お米お茶碗1杯分",
			calorie: 346
		},
		{
			amount: 1,
			icon_url: "rice.svg",
			explanation: "お米お茶碗1杯分",
			calorie: 346
		},
		{
			amount: 1,
			icon_url: "rice.svg",
			explanation: "お米お茶碗1杯分",
			calorie: 346
		},
		{
			amount: 1,
			icon_url: "rice.svg",
			explanation: "お米お茶碗1杯分",
			calorie: 346
		},
	]

	return (
		<Layout header={{ has_back_button: false, title: "ホーム" }}>
			<div className='title_24 text_center'>今日のカロリー目安</div>
			<CardCalorie icon={"restaurant"} title={"食事の目安"} calorie={3000} class_name="mt_8"></CardCalorie>
			<CardCalorie icon={"fitness_center"} title={"運動の目安"} calorie={3000} class_name={"mt_8"}></CardCalorie>
			<div className='mt_24 title_24 text_center'>今日のカロリー計画</div>
			<div className="mt_24 l_flex border_bottom">
				<p className="title_24">食事</p>
				<p className="title_24 ml_at">3000kcal</p>
			</div>
			<div className="mt_8 l_flex">
				<p className="title_20">朝食の摂取カロリー</p>
				<p className="title_20 ml_at">400kcal</p>
			</div>
			<div className="mt_8 l_grid grid_auto gap_8">
				{foodAmountArr.map((foodAmount, index) => {
					return (
						<CardFoodAmount
							key={index}
							amount={foodAmount.amount}
							icon_url={foodAmount.icon_url}
							explanation={foodAmount.explanation}
							calorie={foodAmount.calorie}
						></CardFoodAmount>
					)
				})
				}
			</div>
			<div className="mt_24 l_flex">
				<p className="title_20">昼食の摂取カロリー</p>
				<p className="title_20 ml_at">400kcal</p>
			</div>
			<div className="mt_8 l_grid grid_auto gap_8">
				{foodAmountArr.map((foodAmount, index) => {
					return (
						<CardFoodAmount
							key={index}
							amount={foodAmount.amount}
							icon_url={foodAmount.icon_url}
							explanation={foodAmount.explanation}
							calorie={foodAmount.calorie}
						></CardFoodAmount>
					)
				})
				}
			</div>
			<div className="mt_24 l_flex">
				<p className="title_20">夕食の摂取カロリー</p>
				<p className="title_20 ml_at">400kcal</p>
			</div>
			<div className="mt_8 l_grid grid_auto gap_8">
				{foodAmountArr.map((foodAmount, index) => {
					return (
						<CardFoodAmount
							key={index}
							amount={foodAmount.amount}
							icon_url={foodAmount.icon_url}
							explanation={foodAmount.explanation}
							calorie={foodAmount.calorie}
						></CardFoodAmount>
					)
				})
				}
			</div>
			<div className="mt_24 l_flex border_bottom">
				<p className="title_24">運動</p>
				<p className="title_24 ml_at">300kcal</p>
			</div>
			<div className="mt_8 l_flex">
				<p className="title_20">運動の消費カロリー</p>
				<p className="title_20 ml_at">300kcal</p>
			</div>
			<div className="mt_8 l_grid grid_auto gap_8">
				{foodAmountArr.map((foodAmount, index) => {
					return (
						<CardFoodAmount
							key={index}
							amount={foodAmount.amount}
							icon_url={foodAmount.icon_url}
							explanation={foodAmount.explanation}
							calorie={foodAmount.calorie}
						></CardFoodAmount>
					)
				})
				}
			</div>
		</Layout>
	)
}