import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "./components/SideNav";
import Dashboard from "./page";
import { ReactNode } from 'react'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-row bg-white">
            <SideNav />
			<main className='w-full py-4 md:py-6 px-4'>{children}</main>
		</div>
	)
}