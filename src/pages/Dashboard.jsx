import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import RecentNews from '../components/RecentNews'
import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularNews from '../components/PopularNews'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentNews />
				<PopularNews />
			</div>
		</div>
	)
}
